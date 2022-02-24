import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import React, { useState } from "react"

import "./App.css"

import Home from "./pages/home"
import PresaleMint from "./pages/presalemint"
import PresaleWait from "./pages/presalewait"
import PublicSaleMint from "./pages/publicsalemint"
import Staking from "./pages/staking"
import Burning from "./pages/burning"

function App() {
  const [showline, setShowline] = useState(true)

  const showLine = () => setShowline(!showline)

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <PresaleMint /> */}
      {/* <PresaleWait /> */}
      {/* <PublicSaleMint /> */}
      <Router>
        <div className="staking-nav flex">
          <div className="burning-staking-btn" onClick={showLine}>
            <Link to="/" className=" kasumi">
              <p className={showline ? "grey-color" : "white-color"}>BURNING</p>
              <div className={showline ? "line" : "hide"} />
            </Link>
          </div>
          <div className="burning-staking-btn" onClick={showLine}>
            <Link to="/staking" className=" kasumi">
              <p className={!showline ? "grey-color" : "white-color"}>
                STAKING
              </p>
              <div className={showline ? "hide" : "line"} />
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/staking/*" element={<Staking />} />
          <Route path="/" element={<Burning />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
