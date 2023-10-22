import { PortfolioCard } from "./PortfolioCard";
import cq from "../../Images/cq.png"
import cw from "../../Images/cw.png"
import hat from "../../Images/hat.png"
import nt from "../../Images/nt.png"
import wr from "../../Images/wr.png"
import tg from "../../Images/tg.png"

const Projects = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PortfolioCard
          projectName="Hybrid Attendance Tracker"
          projectUrl="https://ahermez.github.io/hybrid-tracker-project-1/"
          githubUrl="https://github.com/ahermez/hybrid-tracker-project-1.git"
          fileName={hat}
        />

        <PortfolioCard
          projectName="Travel Geek"
          projectUrl="https://travelgeekalicia-bd545f74fdfc.herokuapp.com/"
          githubUrl="https://github.com/SquirrelsAtARave/Travel-Geek"
          fileName={tg}
        />

        <PortfolioCard
          projectName="Where's Robbert"
          projectUrl="https://where-is-robbert-6b2227092c3e.herokuapp.com"
          githubUrl="https://github.com/vini3076/prj3-WhereisRobbert"
          fileName={wr}
        />
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
        <PortfolioCard
          projectName="Code-Quiz"
          githubUrl="https://github.com/ahermez/Code-Quiz-Challenge-4"
          fileName={cq}
        />
        <PortfolioCard
          projectName="Critical-Weather"
          githubUrl="https://github.com/ahermez/Critical-Weather"
          fileName={cw}
        />

        <PortfolioCard
          projectName="Note-Taker"
          githubUrl="https://github.com/ahermez/Critical-Weather"
          fileName={nt}
        />
      </div>
    </>
  );
};

export default Projects;
