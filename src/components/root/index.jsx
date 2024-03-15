import { Link, Outlet, useLocation } from "react-router-dom";
import pdf from "../../Images/resume.pdf";
import "./root.css";

const Root = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div style={{ height: "90vh" }}>
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
        <li className="navItem">
          <a className="downloadButton" href={pdf} download>
            Resume
          </a>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Root;
