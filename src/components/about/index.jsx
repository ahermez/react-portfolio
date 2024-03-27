import "./about.css";
import Images from "../../Images/photo11.png";

const About = () => {
  return (
    <div style={{ height: "100vh" }}>
      <section className="container">
        <div className="sub-container">
          <div className="avatar-header">
            <img className="avatar" src={Images} />
            <div className="title">
              <span id="name"> {"Ali Hermez"}</span>
              <span id="jobTitle"> {"Front-end"}</span>
            </div>
          </div>
          <h3>
            About me...Living in the San Francisco Bay Area, I love sunny days,
            hiking, palm trees and ocean breeze. My fervor lies in continuous
            learning, delving deep into the intricacites of coding, and striving
            for excellence in mastering its building blocks.
          </h3>
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
