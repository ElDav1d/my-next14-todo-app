export interface NavLink {
  name: string;
  path: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  github_nick: string | null;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  user_id: string;
  due_date: string;
};
