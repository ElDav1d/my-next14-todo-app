export interface NavLink {
  name: string;
  path: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  github_nick?: string;
};
