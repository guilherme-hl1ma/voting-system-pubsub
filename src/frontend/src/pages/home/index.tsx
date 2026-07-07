import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to voting system.</p>
      <div>
        <h2>What do you want to do?</h2>
        <ul>
          <li>
            <Link to={"/vote/list"}>Vote in an open vote</Link>
          </li>
          <li>
            <Link to={"/vote/register"}>Register a vote</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
