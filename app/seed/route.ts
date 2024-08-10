import bcrypt from 'bcrypt';
import { v4 as uuidv4, validate as validateUUID } from 'uuid';
import { db } from '@vercel/postgres';
import { users, todos, todosUUIDs } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      github_nick TEXT,
      password TEXT NOT NULL
    )
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const passwordHash = await bcrypt.hash(user.password, 10);
      return client.sql`
            INSERT INTO users (id, name, email, github_nick, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${user.github_nick}, ${passwordHash})
             ON CONFLICT (id) DO NOTHING;
        `;
    })
  );

  return insertedUsers;
}

async function seedTodos() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS todos (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL,
      due_date TEXT NOT NULL
    )
  `;

  const insertedTodos = await Promise.all(
    todos.map((todo, index) => {
      // Assign an UUID to the todo id
      // from the todosUUIDs array
      todo.id = todosUUIDs[index];

      // Log the UUID values
      console.log(
        `Inserting todo with id: ${todo.id}, user_id: ${todo.user_id}`
      );

      // Validate UUID format
      if (!validateUUID(todo.id) || !validateUUID(todo.user_id)) {
        throw new Error(
          `Invalid UUID format for todo id: ${todo.id} or user_id: ${todo.user_id}`
        );
      }

      return client.sql`
        INSERT INTO todos (id, user_id, title, description, completed, due_date)
        VALUES (${todo.id}, ${todo.user_id}, ${todo.title}, ${todo.description}, ${todo.completed}, ${todo.due_date})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedTodos;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedTodos();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
