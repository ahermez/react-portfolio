import { Link, Outlet, useLocation } from "react-router-dom";
import "./root.css";
const Root = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <span>
      <ul className="navBar">
        <li className="navItem">
          <Link
            to="/"
            className={`navLink ${
              location.pathname === "/" ? "highlight" : ""
            }`}
          >
            <span>About me</span>
          </Link>
        </li>
        <li className="navItem">
          <Link
            to="/portfolio"
            className={`navLink ${
              location.pathname === "/portfolio" ? "highlight" : ""
            }`}
          >
             <span>Portfolio</span>
          </Link>
        </li>
          </ul>
      <div>
        <Outlet />
      </div>
    </span>
  );
};

export default Root;