import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";

import Home from "./pages/home";
import PresaleMint from "./pages/presalemint";
import PresaleWait from "./pages/presalewait";
import PublicSaleMint from "./pages/publicsalemint";
import Staking from "./pages/staking";
import Burning from "./pages/burning";
import { useLocation } from "react-router-dom";

const StakingNav = () => {
  const location = useLocation();
  const isBuringURL = location.pathname.startsWith("/burning");
  const [isBurning, setIsBurning] = useState(isBuringURL);
  const [isStaking, setIsStaking] = useState(!isBuringURL);

  const IsBurning = () => {
    if (!isBurning) {
      setIsBurning(true);
      setIsStaking(false);
    }
  };

  const IsStaking = () => {
    if (!isStaking) {
      setIsBurning(false);
      setIsStaking(true);
    }
  };

  return (
    <div className="staking-nav flex">
      <div className="burning-staking-btn" onClick={IsBurning}>
        <Link to="/burning" className=" kasumi">
          <p className={isBurning ? "white-color" : "grey-color"}>BURNING</p>
          <div className={isBurning ? "line" : "hide"} />
        </Link>
      </div>
      <div className="burning-staking-btn" onClick={IsStaking}>
        <Link to="/staking" className=" kasumi">
          <p className={isStaking ? "white-color" : "grey-color"}>STAKING</p>
          <div className={!isStaking ? "hide" : "line"} />
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/staking/*"
          element={
            <>
              <StakingNav />
              <Staking />
            </>
          }
        />
        <Route
          path="/burning"
          element={
            <>
              <StakingNav />
              <Burning />
            </>
          }
        />
        <Route path="/presalemint" element={<PresaleMint />} />
        <Route path="/presalewait" element={<PresaleWait />} />
        <Route path="/publicsalemint" element={<PublicSaleMint />} /> */}
      </Routes>
    </div>
  );
}

export default App;
