// import logo from "../img/Voxels Logo.png"
import { Link } from "react-router-dom";

export default function () {
  return (
    <header>
      <div className="header">
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
          {/* <a href="#" className="connect-wallet kasumi ">
          <span>CONNECT WALLET</span>
        </a> */}
          <div className="wallet-info">
            <span className="agency balance">Balance:&nbsp;0.5184ETH</span>
            <span className="agency balance">0x2134...6D921</span>
          </div>
        </div>
      </div>
    </header>
  );
}
