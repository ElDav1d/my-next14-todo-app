import { Button } from "./button";

export default function LoginForm() {
  return (
    <form action="">
      <fieldset>
        <legend>Log in your account</legend>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your user email address"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create your password"
            required
            minLength={6}
          />
        </div>
      </fieldset>
      <Button type="submit">Login</Button>
    </form>
  );
}
