import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import "../styles/roadmap.scss";

const RoadmapElement = ({ h2, className, children }) => {
  return (
    <div>
      {className === "border-blue-2022" && <div className="year">2022</div>}
      {className === "border-blue-2023" && <div className="year">2023</div>}
      <div className={`rdelement ${className}`}>
        <h2>{h2}</h2>
        <div className="agencyr">{children}</div>
      </div>
    </div>
  );
};

const RoadmapContent = ({ h2, children }) => {
  return (
    <div className="rdcontent">
      {children}
      <h2>{h2}</h2>
      <div className="dash">
        <DottedLine />
      </div>
      <div className="arrow">
        <div></div>
      </div>
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
        <div className="liner"></div>
      </div>
      <div className="margin-control">
        <div className="flexed">
          <RoadmapContent h2="Q1, '22">
            <div>
              <img src={img1} alt="img1" />
            </div>
          </RoadmapContent>

          <div className="maxWidth">
            <RoadmapElement h2="VOXELS LAUNCH" className="border-blue-2022">
              <p>
                Campaign Start via IRL NYC Gallery. VOXELS will launch social
                channels - Twitter, Discord & Medium.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="COMMUNITY BUILDING">
              <p>
                Community will be build through a unique roadmap unveiling as
                mechanics are revealed in phases through an elaborate Discord
                game. Through an engaged community, partnerships & Alphas,
                VOXELS will set forth their presence.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="EARNING $WIRE">
              <p>
                Members will be able to earn $WIRE within the server & discuss
                mechanics. All $WIRE earnt will be claimable directly post mint.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="TEAM">
              <p>
                The team will host AMA sessions for members, other AMA sessions
                throughout other alpha groups, and Twitter. The Whitepaper &
                Tokenomics will be released.
              </p>
            </RoadmapElement>
          </div>
        </div>

        <div className="flexed">
          <RoadmapContent h2="Q2, '22">
            <div>
              <img src={img2} alt="img2" />
            </div>
          </RoadmapContent>
          <div className="maxWidth">
            <RoadmapElement h2="MINT" className="border-red">
              <p>Pre-Sale: April TBA</p>
              <p>Public: April TBA</p>
            </RoadmapElement>
            <RoadmapElement h2="$WIRE CLAIM">
              <p>
                Tokenization of $WIRE is effective immediately post mint.
                Minters will be able to claim directly via Website's interactive
                platform.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="VOXEL MECHANICS">
              <p>
                Medium posts detailing all mechanics that come into play. Voxel
                holders will have a chance of attaining the Genesis Voxel.
                Genesis Voxel holders will be able to evolve their art form
                further.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="VOXELVERSE">
              <p>
                Alpha release of the AI-art curation platform. The team will
                work hand in hand with reputable AI-artists to better their
                alpha version of the platform.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="BETA VERSION">
              <p>
                VOXELVERSE will deploy their beta product to the market. Only
                Genesis holders will have direct access to the platform both for
                art curation & earning.
              </p>
            </RoadmapElement>
          </div>
        </div>
        <div className="flexed">
          <RoadmapContent h2="Q3, '22">
            <div>
              <img src={img3} alt="img3" />
            </div>
          </RoadmapContent>
          <div className="maxWidth">
            <RoadmapElement h2="DEPLOY VOXELVERSE" className="border-blue">
              <p>
                Final version of the platform will hit the market. Art curators
                will have to own a Genesis Voxel to generate AI-art collections
                within the platform.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="BUILD BRANDING">
              <p>
                Team will leverage current network, including a team of artists,
                to expose the brand worldwide amongst art driven communities.
              </p>
            </RoadmapElement>
          </div>
        </div>
        <div className="flexed">
          <RoadmapContent h2="Q4, '22">
            <div>
              <img src={img4} alt="img4" />
            </div>
          </RoadmapContent>
          <div className="maxWidth">
            <RoadmapElement h2="IRL EVENTS">
              <p>
                Get invites to private events & galleries hosted by the
                community and team. AI Art, Metaverse galleries, high production
                videos.
              </p>
            </RoadmapElement>
          </div>
        </div>
        <div className="flexed last">
          <RoadmapContent h2="2023+">
            <div>
              <img src={img5} alt="img5" />
            </div>
          </RoadmapContent>
          <div className="maxWidth">
            <RoadmapElement h2="VOXELVERSE STUDIO" className="border-blue-2023">
              <p>
                Open up IRL studio within a major art struck city. Studio will
                showcase all featured collections made through the platform.
              </p>
            </RoadmapElement>
            <RoadmapElement h2="COMMUNITY DAO">
              <p>
                Collectively decide on the future growth of VOXELVERSE through a
                decentralized autonomous organization.
              </p>
            </RoadmapElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
