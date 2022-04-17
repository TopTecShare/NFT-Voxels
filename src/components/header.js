// import logo from "../img/Voxels Logo.png";
import { Link } from "react-router-dom";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { shortenAddress } from "@usedapp/core";
import { useState } from "react";
import { formatAmount } from "../global/utils";
import WalletConnectionModal from "./walletmodal";

// import opensea from "../img/OpenSea.svg";
// import discord from "../img/Discord.svg";
// import twitter from "../img/Twitter.svg";

import { ReactComponent as Opensea } from "../img/OpenSea.svg";
import { ReactComponent as Discord } from "../img/Discord.svg";
import { ReactComponent as Twitter } from "../img/Twitter.svg";
import { ReactComponent as Menu } from "../img/Menu.svg";

export default function Header({ openMenu }) {
  const [open, setOpen] = useState(false);
  const { account } = useEthers();
  const balance = useEtherBalance(account);

  return (
    <header>
      <div className="header">
        <footer>
          <div>
            <span onClick={() => openMenu(true)}>
              {/* <img src={menu} alt="menu" style={{ cursor: "pointer" }} /> */}
              <Menu />
            </span>
            <a
              href="https://twitter.com/Voxels_NFT"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={twitter} alt="twitter" /> */}
              <Twitter />
            </a>
            <a href="/" target="_blank">
              {/* <img src={opensea} alt="opensea" /> */}
              <Opensea />
            </a>
            <a
              href="https://discord.gg/voxelsnft"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={discord} alt="discord" /> */}
              <Discord />
            </a>
          </div>
        </footer>
        <WalletConnectionModal open={open} onClose={() => setOpen(false)} />
        <Link to="/" className="header-l">
          {/* <a href="#" className="connect-wallet kasumi ">
          <span>CONNECT WALLET</span>
        </a> */}
          <div className="flex">
            <span className="kasumi logo-l">VOXELS</span>
            <span className="kasumi logo-r">NFT</span>
          </div>
        </Link>
        <div className="header-r">
          {account ? (
            <div className="wallet-info" onClick={() => setOpen(true)}>
              <div>
                <span className="agency balance">
                  Balance: {formatAmount(balance, 18, 4)} ETH
                </span>
              </div>
              <div>
                <span className="agency balance">
                  {shortenAddress(account)}
                </span>
              </div>
            </div>
          ) : (
            <div
              className="connect-wallet kasumi"
              onClick={() => setOpen(true)}
            >
              <span style={{ cursor: "pointer" }}>CONNECT WALLET</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
