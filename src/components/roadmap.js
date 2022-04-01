import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.png";
import img4 from "../imgs/4.png";
import img5 from "../imgs/5.png";
import "../styles/roadmap.scss";

const RoadmapContent = ({ h2, style, children }) => {
  return (
    <div className="rdcontent">
      <h2>{h2}</h2>
      <p>{children}</p>
    </div>
  );
};

const RoadmapNav = ({ h2, children }) => {
  return (
    <div>
      {children}
      <h2>{h2}</h2>
    </div>
  );
};

const DottedLine = () => {
  return <div className="dotted" />;
};

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>ROADMAP</h1>
      <div className="linebox">
        <div className="line"></div>
      </div>
      <div>
        <nav>
          <RoadmapNav h2="Q1, '22">
            <div>
              <img src={img1} alt="img1" />
            </div>
          </RoadmapNav>

          <RoadmapNav h2="Q2, '22">
            <div>
              <img src={img2} alt="img2" />
            </div>
          </RoadmapNav>
          <RoadmapNav h2="Q3, '22">
            <div>
              <img src={img3} alt="img3" />
            </div>
          </RoadmapNav>
          <RoadmapNav h2="Q4, '22">
            <div>
              <img src={img4} alt="img4" />
            </div>
          </RoadmapNav>
          <RoadmapNav h2="2023+">
            <div>
              <img src={img5} alt="img5" />
            </div>
          </RoadmapNav>
        </nav>
        <article>
          <RoadmapContent></RoadmapContent>
        </article>
      </div>
    </div>
  );
};

export default Roadmap;
