import logo from "../img/Voxels Logo.png"

export default function () {
  return (
    <header>
      <div className="header-l">
        <img src={logo} className="logo" />
      </div>
      <div className="header-r">
        {/* <a href="#" className="connect-wallet kasumi ">
          <span>CONNECT WALLET</span>
        </a> */}
        <div className="wallet-info">
          <div>
            <span className="agency balance">Balance: 0.5184ETH</span>
          </div>
          <div>
            <span className="agency balance">0x2134...6D921</span>
          </div>
        </div>
      </div>
    </header>
  )
}
