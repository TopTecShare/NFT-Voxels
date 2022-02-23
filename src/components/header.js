import logo from "../img/Voxels Logo.png"

export default function () {
  return (
    <header>
      <div className="header-l">
        <img src={logo} className="logo" />
      </div>
      <div className="header-r">
        <a href="#" className="connect-wallet kasumi ">
          <span>CONNECT WALLET</span>
        </a>
      </div>
    </header>
  )
}
