import { PortfolioCard } from "./PortfolioCard";

const Projects = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PortfolioCard
          projectName="Hybrid Attendance Tracker"
          projectUrl="https://ahermez.github.io/hybrid-tracker-project-1/"
          githubUrl="https://github.com/ahermez/hybrid-tracker-project-1.git"
          fileName="hat.png"
        />

        <PortfolioCard
          projectName="Travel Geek"
          projectUrl="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/"
          githubUrl="https://github.com/SquirrelsAtARave/Travel-Geek"
          fileName="tg.png"
        />

        <PortfolioCard
          projectName="Password Generator"
          githubUrl="https://ahermez.github.io/My-Password-Generator/"
          fileName="pg.png"
        />

        <PortfolioCard
          projectName="Code-Quiz"
          githubUrl="https://github.com/ahermez/Code-Quiz-Challenge-4"
          fileName="cq.png"
        />
        <PortfolioCard
          projectName="Critical-Weather"
          githubUrl="https://github.com/ahermez/Critical-Weather"
          fileName="cw.png"
        />

        <PortfolioCard
          projectName="Note-Taker"
          githubUrl="https://github.com/ahermez/Critical-Weather"
          fileName="nt.png"
        />
      </div>
    </>
  );
};

export default Projects;
