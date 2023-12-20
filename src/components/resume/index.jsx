import "./resume.css";
import pdf from "../../Images/resume.pdf";
export const Resume = () => {
    return (
           <a className="downloadButton" href= {pdf}download>
          resume
        </a>
        );
  };
  
  export default Resume;