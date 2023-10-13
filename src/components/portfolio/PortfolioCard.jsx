// destructering
export const PortfolioCard = ({
  projectName,
  githubUrl,
  projectUrl,
  fileName,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e4e4e4",
        borderRadius: "4px",
        maxHeight: "600px",
        maxWidth: "400px",
        margin: "6px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{projectName}</h3>
      <div style={{ width: "400px", height: "400px", borderRadius: "4px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt={`Github for ${projectName}`}
          src={fileName}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "6px",
        }}
      >
        <a href={githubUrl}>Github</a>
        <a href={projectUrl}>Project</a>
      </div>
    </div>
  );
};
