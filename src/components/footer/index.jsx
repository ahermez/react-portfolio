import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3> Nadya Alicia Hermez</h3>
      </div>
      <ul>
        <li>
          <a href="mailto:ahermez@ymail.com" style={{ color: "whitesmoke" }}>
            Email: ahermez@ymail.com
          </a>
        </li>
      </ul>
      <div className="footer-section">
        <a href="https://github.com/ahermez">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className="footer-section">
        <a href="https:/www.linkedin.com/in/ali-hermez-a8a73633">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      {/* <div className="footer-section">
        <a href="https://www.instagram.com/valueab2/">
          <i className="fa fa-instagram"></i>
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
