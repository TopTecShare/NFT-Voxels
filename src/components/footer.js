import twitter from "../img/OpenSea.png";
import discord from "../img/Discord.png";
import opensea from "../img/Twitter.png";

export default function () {
  return (
    <footer>
      <div>
        <a href="#" target="_blank">
          <img src={twitter} />
        </a>
        <a href="#" target="_blank">
          <img src={discord} />
        </a>
        <a href="#" target="_blank">
          <img src={opensea} />
        </a>
      </div>
    </footer>
  );
}
