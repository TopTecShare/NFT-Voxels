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
  const [isBurning, setIsBurning] = useState(true)
  const [isStaking, setIsStaking] = useState(false)

  const IsBurning = () => {
    if (isBurning == false) {
      setIsBurning(true)
      setIsStaking(false)
    }
  }

  const IsStaking = () => {
    if (isStaking == false) {
      setIsBurning(false)
      setIsStaking(true)
    }
  }

  return (
    <div className="App">
      <Home />
      {/* <PresaleMint /> */}
      {/* <PresaleWait /> */}
      {/* <PublicSaleMint /> */}
      {/* <Router>
        <div className="staking-nav flex">
          <div className="burning-staking-btn" onClick={IsBurning}>
            <Link to="/" className=" kasumi">
              <p className={isBurning ? "grey-color" : "white-color"}>
                BURNING
              </p>
              <div className={isBurning ? "line" : "hide"} />
            </Link>
          </div>
          <div className="burning-staking-btn" onClick={IsStaking}>
            <Link to="/staking" className=" kasumi">
              <p className={isStaking ? "grey-color" : "white-color"}>
                STAKING
              </p>
              <div className={!isStaking ? "hide" : "line"} />
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/staking/*" element={<Staking />} />
          <Route path="/" element={<Burning />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
