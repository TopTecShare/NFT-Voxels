import "../styles/team.scss";
import twitter from "../img/twitter copy.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
// import www from "../img/www.png";
import img1 from "../img/imgs/1.png";
import img2 from "../img/imgs/2.png";
import img3 from "../img/imgs/3.png";
import img4 from "../img/imgs/4.png";
import img5 from "../img/imgs/5.png";
import img6 from "../img/imgs/6.png";
import img7 from "../img/imgs/7.png";
import img8 from "../img/imgs/8.png";
import img9 from "../img/imgs/9.png";
import img10 from "../img/imgs/10.png";
import img11 from "../img/imgs/11.png";
import img12 from "../img/imgs/12.png";
import img13 from "../img/imgs/13.png";
import img14 from "../img/imgs/14.png";
import img15 from "../img/imgs/15.png";
import img16 from "../img/imgs/16.png";
import img17 from "../img/imgs/17.png";
import img18 from "../img/imgs/18.png";
import img19 from "../img/imgs/19.png";

const TeamContent = ({ h2, p, children, profile }) => {
  return (
    <div className="tmcontent agency">
      <div className="flex">
        <img src={profile} alt="profile" />
      </div>
      <div className="text">
        <h2>{h2}</h2>
        <p className="agencyr">{p}</p>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="team" id="team">
      <h1>THE TEAM</h1>
      <div className="linebox">
        <div className="liner"></div>
      </div>
      <div className="container">
        <TeamContent h2="Gary Bentz" p="Visionary/Strategic Ops" profile={img1}>
          <a target="_blank" href="https://www.linkedin.com/in/garybentz/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </TeamContent>

        <TeamContent h2="mikev2" p="Voxelverse Developer" profile={img2}>
          <a target="_blank" href="https://github.com/mikevercoelen">
            <img src={github} alt="github" />
          </a>
        </TeamContent>

        <TeamContent h2="0xSethyk" p="Graphic Designer" profile={img3}>
          <a target="_blank" href="https://twitter.com/0xSethyk">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Cpivet" p="Solidity Developer" profile={img4}>
          <a target="_blank" href="https://www.linkedin.com/in/ax-5bab1a198/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a target="_blank" href="https://github.com/devneser">
            <img src={github} alt="github" />
          </a>
        </TeamContent>

        <TeamContent h2="kokid951" p="Marketing Advisor" profile={img5}>
          <a target="_blank" href="https://twitter.com/kokid951">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Cloud" p="Artist Relations" profile={img6}>
          <a target="_blank" href="ttps://twitter.com/CloudHopper69">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Angels" p="Collaboration Advisor" profile={img7}>
          <a target="_blank" href="https://twitter.com/xAngeels">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent
          h2="Baostronaut"
          p="Solidity Developer/Auditor"
          profile={img8}
        >
          <a target="_blank" href="https://twitter.com/Baostronaut">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>
      </div>
      <div
        className="linebox"
        style={{ marginTop: "2em", marginBottom: "2em" }}
      >
        <div className="liner"></div>
      </div>
      <div className="container">
        <TeamContent h2="Riku" p="Head Community Manager" profile={img9}>
          <a target="_blank" href="https://twitter.com/NoveltyRiku">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Evobelle" p="Head Community Manager" profile={img10}>
          <a target="_blank" href="https://twitter.com/evo_belle">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="surferkiddo" p="Collaboration Council" profile={img11}>
          <a target="_blank" href="https://twitter.com/surferkiddo">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent
          h2="soluvlyy.eth"
          p="Collaboration Council"
          profile={img12}
        >
          <a target="_blank" href="https://twitter.com/soluvlyyx">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="KingJDiddy" p="Security Advisor" profile={img13}>
          <a target="_blank" href=" https://twitter.com/KingJDiddy_ETH">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Tama" p="Moderator" profile={img14}>
          <a target="_blank" href="https://twitter.com/Tama_the_hodler">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Rooks" p="Moderator" profile={img15}>
          <a target="_blank" href="https://twitter.com/Rooksmusic">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Infiniti" p="Moderator" profile={img16}>
          <a target="_blank" href="https://twitter.com/infiniti_xyz">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="NatNava" p="Moderator" profile={img17}>
          <a target="_blank" href="https://twitter.com/infiniti_xyz">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="TUSSU" p="Moderator" profile={img18}>
          <a target="_blank" href="https://twitter.com/infiniti_xyz">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent h2="Blank" p="Moderator" profile={img19}>
          <a target="_blank" href="https://twitter.com/infiniti_xyz">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>
      </div>
    </div>
  );
};

export default Team;
