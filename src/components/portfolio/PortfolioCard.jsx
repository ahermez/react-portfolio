// destructering
import "./portfolio.css";
export const PortfolioCard = ({
  projectName,
  githubUrl,
  projectUrl,
  fileName,
}) => {
  return (
    <div className="portfolio-container">
      <h3 className="portfolio-title">{projectName}</h3>
      <div className="portfolio-details">
        <img
          className="portfolio-details-img"
          alt={`Github for ${projectName}`}
          src={fileName}
        />
      </div>
      <div className="portfolio-footer">
        <a href={githubUrl}>Github</a>
        <a href={projectUrl}>Project</a>
      </div>
    </div>
  );
};
