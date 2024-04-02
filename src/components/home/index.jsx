import { Link, Outlet, useLocation } from "react-router-dom";
import pdf from "../../Images/resume.pdf";
import "./home.css";

const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
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

      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
