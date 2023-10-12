import "./resume.css";

export const Resume = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Handlebars</li>
        <li>Express</li>
        <li>Node.js</li>
      </ul>

      <a className="downloadButton" href="Images/resume.pdf" download>
        download{" "}
      </a>
    </div>
  );
};

export default Resume;
