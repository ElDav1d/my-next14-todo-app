import { User, Todo } from './definitions';
// 5 placeholder users
// one user has a null github_nick
// one user has an empty todo list
// some todos are completed
// some todos are not completed
// one user has a todo list with one item
// todo id is UUID v4

const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'David',
    email: 'wtf@gmail.com',
    github_nick: 'ElDav1d',
    password: '123456',
  },
  {
    id: 'd2f5c4c1-0018-46e6-af01-fe835228db53',
    name: 'Pepeluis',
    email: 'wtf2@gmail.com',
    github_nick: 'Pepirob',
    password: '123456',
  },
  {
    id: '0821821e-3624-46df-81de-9567621322e3',
    name: 'Jorge',
    email: 'wtf3@gmail.com',
    github_nick: 'jorgeberrizbeitia',
    password: '123456',
  },
  {
    id: '453ca03a-59af-487d-aec2-6d042d62534c',
    name: 'Alberto',
    email: 'wtf4@gmail.com',
    github_nick: 'Apleon89',
    password: '123456',
  },
  {
    id: 'f670f4d0-dc0d-4513-85ae-80ceb51c84e5',
    name: 'MrNobody',
    email: 'wtf5@gmail.com',
    github_nick: null,
    password: '123456',
  },
];

const todos: Todo[] = [
  {
    id: '',
    title: 'Buy groceries',
    description: 'Milk, Bread, Cheese, Eggs',
    completed: false,
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    due_date: '2023-10-01',
  },
  {
    id: '',
    title: 'Complete project report',
    description: 'Finish the final draft of the project report',
    completed: true,
    user_id: 'd2f5c4c1-0018-46e6-af01-fe835228db53',
    due_date: '2023-10-02',
  },
  {
    id: '',
    title: 'Workout',
    description: 'Go to the gym for a workout session',
    completed: false,
    user_id: '0821821e-3624-46df-81de-9567621322e3',
    due_date: '2023-10-03',
  },
  {
    id: '',
    title: 'Read a book',
    description: 'Read at least 50 pages of a book',
    completed: true,
    user_id: '453ca03a-59af-487d-aec2-6d042d62534c',
    due_date: '2023-10-04',
  },
  {
    id: '',
    title: 'Clean the house',
    description: 'Vacuum and dust all rooms',
    completed: false,
    user_id: 'f670f4d0-dc0d-4513-85ae-80ceb51c84e5',
    due_date: '2023-10-05',
  },
  {
    id: '',
    title: 'Pay bills',
    description: 'Pay electricity and water bills',
    completed: true,
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    due_date: '2023-10-06',
  },
  {
    id: '',
    title: 'Attend meeting',
    description: 'Attend the team meeting at 10 AM',
    completed: false,
    user_id: 'd2f5c4c1-0018-46e6-af01-fe835228db53',
    due_date: '2023-10-07',
  },
  {
    id: '',
    title: 'Write blog post',
    description: 'Write a new blog post for the website',
    completed: true,
    user_id: '0821821e-3624-46df-81de-9567621322e3',
    due_date: '2023-10-08',
  },
  {
    id: '',
    title: 'Plan vacation',
    description: 'Plan the itinerary for the upcoming vacation',
    completed: false,
    user_id: '453ca03a-59af-487d-aec2-6d042d62534c',
    due_date: '2023-10-09',
  },
  {
    id: '',
    title: 'Grocery shopping',
    description: 'Buy vegetables and fruits',
    completed: true,
    user_id: 'f670f4d0-dc0d-4513-85ae-80ceb51c84e5',
    due_date: '2023-10-10',
  },
  {
    id: '',
    title: 'Fix the car',
    description: 'Take the car to the mechanic for repairs',
    completed: false,
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    due_date: '2023-10-11',
  },
  {
    id: '',
    title: 'Study for exam',
    description: 'Study for the upcoming math exam',
    completed: true,
    user_id: 'd2f5c4c1-0018-46e6-af01-fe835228db53',
    due_date: '2023-10-12',
  },
  {
    id: '',
    title: 'Call mom',
    description: 'Call mom to check in and chat',
    completed: false,
    user_id: '0821821e-3624-46df-81de-9567621322e3',
    due_date: '2023-10-13',
  },
  {
    id: '',
    title: 'Finish assignment',
    description: 'Complete the assignment for the online course',
    completed: true,
    user_id: '453ca03a-59af-487d-aec2-6d042d62534c',
    due_date: '2023-10-14',
  },
  {
    id: '',
    title: 'Organize closet',
    description: 'Sort and organize clothes in the closet',
    completed: false,
    user_id: 'f670f4d0-dc0d-4513-85ae-80ceb51c84e5',
    due_date: '2023-10-15',
  },
  {
    id: '',
    title: 'Prepare presentation',
    description: 'Prepare slides for the upcoming presentation',
    completed: true,
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    due_date: '2023-10-16',
  },
  {
    id: '',
    title: 'Attend workshop',
    description: 'Attend the online workshop on web development',
    completed: false,
    user_id: 'd2f5c4c1-0018-46e6-af01-fe835228db53',
    due_date: '2023-10-17',
  },
  {
    id: '',
    title: 'Write code',
    description: 'Work on the new feature for the project',
    completed: true,
    user_id: '0821821e-3624-46df-81de-9567621322e3',
    due_date: '2023-10-18',
  },
  {
    id: '',
    title: 'Go for a run',
    description: 'Run 5 kilometers in the park',
    completed: false,
    user_id: '453ca03a-59af-487d-aec2-6d042d62534c',
    due_date: '2023-10-19',
  },
  {
    id: '',
    title: 'Cook dinner',
    description: 'Prepare a healthy dinner for the family',
    completed: true,
    user_id: 'f670f4d0-dc0d-4513-85ae-80ceb51c84e5',
    due_date: '2023-10-20',
  },
];

const todosUUIDs = [
  'c15f069f-34a5-4ea4-9d62-dec402e06029',
  '736367ce-15c7-41ee-bc86-0190c49b8b86',
  '492cb41e-09b8-45b9-8d72-9d5c7d3a57fb',
  '3d93bfae-0e18-4da6-95b8-2439378a68c8',
  '0bceec36-68e2-4542-a224-1b8a1cbcc6d9',
  '0f211593-78de-4801-b434-4c212f964df6',
  '10a2a36b-abfe-4c4a-8031-16389b4e6f0d',
  'fade240f-efc1-4fac-ac84-1b84a68142c8',
  'bf7e1bb7-2edb-4bc1-859f-af9bd9f7fce3',
  'cc9cbe34-077c-4f38-8343-04028d004898',
  '788b8ca1-5c46-45e7-b0e1-b327c1827add',
  '7ecf391f-3554-409b-bd44-e798c0091761',
  'c248797b-c6c7-4d2d-ab8b-eb9966d42256',
  'ab47099e-08b2-4202-8d96-9448dac2d6af',
  'b66dca7f-151c-4821-bc51-9a504e3957e8',
  '952d0bb2-3555-4cda-b070-22fc3eb87d8d',
  '3352c8fa-e8b6-4340-8bdc-cf9e18289e21',
  '1a569b2a-1788-4962-ab5d-049a6100cea3',
  'f8a66663-b564-450e-9b96-b66710132db6',
  '0527809c-8d1e-4693-83bd-d455e1e45736',
];
export { users, todos, todosUUIDs };
