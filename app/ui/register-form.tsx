import { Button } from "./button";

export default function RegisterForm() {
  return (
    <form action="">
      <fieldset>
        <legend>Create your account</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your user name"
            required
          />
        </div>
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
          <label htmlFor="email">
            <label htmlFor="github">
              Github username &#40;optional: will set your avatar pic&#41;
            </label>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Github username"
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
      <Button type="submit">Submit</Button>
    </form>
  );
}
