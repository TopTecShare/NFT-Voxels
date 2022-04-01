import "../styles/team.scss";
import twitter from "../imgs/twitter.png";
import linkedin from "../imgs/linkedin.png";
import github from "../imgs/github.png";
import www from "../imgs/www.png";
import profile from "../imgs/profile.png";

const TeamContent = ({ h2, p, children }) => {
  return (
    <div className="tmcontent agency">
      <div className="flex">
        <img src={profile} />
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
        <div className="line"></div>
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
