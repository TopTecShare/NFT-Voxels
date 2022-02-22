import logo from "./logo.gif"
import "./App.css"

import Sidebar from "./components/Sidebar"
// import Home from "./pages/Home"
// import CyberSnail from "./pages/CyberSnail"
// import CyberKey from "./pages/CyberKey"
// import TotalUpload from "./pages/TotalUpload"
// import Upload from "./pages/Upload"
// import Claim from "./pages/Claim"

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} className="App-logo" />
        </div>
        <div className="connect-wallet">
          <a>Connect</a>
        </div>
      </header>
      <div className="page-wrap">
        <Sidebar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cybersnail" element={<CyberSnail />} />
          <Route path="/cyberkey" element={<CyberKey />} />
          <Route path="/totalupload" element={<TotalUpload />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/claim" element={<Claim />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App
