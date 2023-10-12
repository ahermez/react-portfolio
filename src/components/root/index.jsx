import { Link, Outlet, useLocation } from "react-router-dom";
import "./root.css";
const Root = () => {
  const location = useLocation();
console.log (location.pathname)
  return (
    <span>
      <header> My Portfolio </header>
      <ul className="navBar">
        <li className="navItem">
          <Link to="/" className={`navLink ${
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
        <li className="navItem">
          <Link to="/resume" className={`navLink ${
              location.pathname === "/resume" ? "highlight" : ""
            }`}
            >
            <span>Resume</span>
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className={`navLink ${
              location.pathname === "/contact" ? "highlight" : ""
            }`}
            >
            <span>Contact</span>
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
