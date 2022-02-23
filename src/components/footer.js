import twitter from "../img/OpenSea.png"
import discord from "../img/Discord.png"
import opensea from "../img/Twitter.png"

export default function () {
  return (
    <footer>
      <div>
        <a href="#">
          <img src={twitter} />
        </a>
        <a href="#">
          <img src={discord} />
        </a>
        <a href="#">
          <img src={opensea} />
        </a>
      </div>
    </footer>
  )
}
