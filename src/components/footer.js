import opensea from "../img/OpenSea.png";
import discord from "../img/Discord.png";
import twitter from "../img/Twitter.png";

export default function () {
  return (
    <footer>
      <div>
        <a href="/" target="_blank">
          <img src={opensea} />
        </a>
        <a href="https://discord.gg/voxelsnft" target="_blank">
          <img src={discord} />
        </a>
        <a href="https://twitter.com/Voxels_NFT" target="_blank">
          <img src={twitter} />
        </a>
      </div>
    </footer>
  );
}
