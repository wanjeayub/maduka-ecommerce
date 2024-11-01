import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row max-w-6xl justify-between p-4">
      <div>
        <Link to={"/"}>
          <span className="font-bold">Logo</span>
        </Link>
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/login"}>
            <li>login</li>
          </Link>
          <Link to={"/register"}>
            <li>register</li>
          </Link>
          <Link to={"/dashboard"}>
            <li>dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
