import "../styles/team.scss";
import twitter from "../img/twitter copy.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import www from "../img/www.png";
import profile from "../img/profile.png";

const TeamContent = ({ h2, p, children }) => {
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
    <div className="team">
      <h1>THE TEAM</h1>
      <div className="linebox">
        <div className="liner"></div>
      </div>
      <div className="container">
        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://twitter.com">
            <img src={github} alt="github" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://twitter.com">
            <img src={github} alt="github" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://twitter.com">
            <img src={github} alt="github" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://twitter.com">
            <img src={linkedin} alt="linkedin" />
          </a>
        </TeamContent>

        <TeamContent
          h2="John Doe"
          p="Senior frontend developer and blockchain expert"
        >
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://twitter.com">
            <img src={www} alt="www" />
          </a>
        </TeamContent>
      </div>
    </div>
  );
};

export default Team;
