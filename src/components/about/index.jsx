import "./about.css";
import Images from "../../Images/Bio Photo.jpg";

const About = () => {
  return (
    <div>
      <section className="container">
        <div className="avatar-header">
          <img className="avatar" src={Images} />
          <div className="title">
            <span id="name"> {"Ali Hermez"}</span>
            <span id="jobTitle"> {"Jr. tech"}</span>
          </div>
        </div>
        <Skills />
      </section>

      <Contact />
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills" id="left">
        <p>{"Web Developer"}</p>
        <p>{"React"}</p>
        <p>{"Javascript"}</p>
        <p>{"CSS"}</p>
        <p>{"APIs"}</p>
        <p>{"MERN"}</p>
      </div>

      <div className="skills">
        <p>{"Node"}</p>
        <p>{"Mongoose"}</p>
        <p>{"MongoDB"}</p>
        <p>{"GraphQL"}</p>
        <p>{"Express"}</p>
        <p>{"SQL"}</p>
      </div>
    </section>
  );
};

function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="info-container">
        <ul>
          {/* <li>
            <a href="mailto:ahermez@ymail.com">Email: ahermez@ymail.com</a>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default About;
