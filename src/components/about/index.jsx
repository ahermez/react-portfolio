import "./about.css";
import "../resume/resume.css";
import Images from "../../Images/Bio Photo.jpg";
import Resume from "../resume";

const About = () => {
  return (
    <div>
      <section className="container">
        <div className="avatar-header">
          <img className="avatar" src={Images} />
          <div className="title">
            <span id="name"> {"Ali Hermez"}</span>
            <span id="jobTitle"> {"Jr. tech stack "}</span>
          </div>
        </div>

        <div className="skills" id="left">
          <p>{"Web Developer"}</p>
          <p>{"React"}</p>
          <p>{"Javascript"}</p>
          <p>{"CSS"}</p>
          <p>{"APIs"}</p>
          <p>{"MERN"}</p>
        </div>

        <div className="skills" id="left">
          <p>{"Node"}</p>
          <p>{"Mongoose"}</p>
          <p>{"MongoDB"}</p>
          <p>{"GraphQL"}</p>
          <p>{"Express"}</p>
          <p>{"SQL"}</p>
        </div>
      </section>

      <Resume />
      <Contact />
    </div>
  );
};
function Contact() {
  return (
    <section className = "Contact" id="contact">
      <div className="info-container">
        <ul>
          <li>
            <a href="mailto:ahermez@ymail.com">Email: ahermez@gmail.com</a>
          </li>
          <li>
            <a href="tel:5105551234">Phone: (510) 555-1234</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
