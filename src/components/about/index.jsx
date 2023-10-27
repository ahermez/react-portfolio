import "./about.css";
import Images from "../../Images/Bio Photo.jpg";
const About = () => {
  return (
    <div>
      <section className="container">
           <div className="avatar-header">
          <img className="avatar" src={Images} />
          <div className= "title">
            <span id="name"> {"Ali Hermez"}</span>
            <span id= "jobTitle"> {"Jr. tech stack "}</span>
          </div>
        </div>

        <div className="skills" id="left">
          <p>{"Web Developer"}</p>
          <p>{"React"}</p>
          <p>{"Javascript"}</p>
          <p>{"CSS"}</p>
          <p>{"APIs"}</p>
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
    </div>
  );
};

export default About;
