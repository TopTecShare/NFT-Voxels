import opensea from "../img/OpenSea.png";
import discord from "../img/Discord.png";
import twitter from "../img/Twitter.png";

export default function Footer () {
  return (
    <footer>
      <div>
        <a href="/" target="_blank">
          <img src={opensea} alt="opensea" />
        </a>
        <a href="https://discord.gg/voxelsnft" target="_blank" rel="noreferrer">
          <img src={discord} alt="discord" />
        </a>
        <a href="https://twitter.com/Voxels_NFT" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </footer>
  );
}
