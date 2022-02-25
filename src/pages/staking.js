import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../styles/staking.css";
import refresh from "../img/Refresh Button.png";

import Stake from "../components/stake";
import UnStake from "../components/unstake";
import Claim from "../components/claim";
import Bar from "../components/progressbar";

const Staking = () => {
  const [stake, setStake] = useState(true);
  const [unStake, setUnStake] = useState(false);
  const [claim, setClaim] = useState(false);

  const stakeBtn = () => {
    setStake(true);
    setUnStake(false);
    setClaim(false);
  };

  const unStakeBtn = () => {
    setStake(false);
    setUnStake(true);
    setClaim(false);
  };

  const unClaimBtn = () => {
    setStake(false);
    setUnStake(false);
    setClaim(true);
  };

  return (
    <div className="staking">
      <div className="voxel-box">
        <div className="stake-nav  flex">
          <Link to="/staking">
            <div
              className={
                stake ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={stakeBtn}
            >
              STAKE
            </div>
          </Link>
          <Link to="/staking/unstake">
            <div
              className={
                unStake ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={unStakeBtn}
            >
              UNSTAKE
            </div>
          </Link>
          <Link to="/staking/claim">
            <div
              className={
                claim ? "kasumi stake-nav-btn-active" : "kasumi stake-nav-btn"
              }
              onClick={unClaimBtn}
            >
              CLAIM $WIRE
            </div>
          </Link>
        </div>
        <div className="voxel-box-title">
          <img src={refresh} className="refresh" alt="refresh" />
        </div>
        <Routes>
          <Route path="/unstake" element={<UnStake />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/" element={<Stake />} />
        </Routes>
      </div>
      <div className={stake ? "show-stake" : "hide"}>
        <a className="mint-button kasumi" href="#mint">
          STAKE
        </a>
        <div className="line" />
        <Bar
          now={`${(2121 / 6363) * 100}%`}
          label={"Voxels Staked: 2121/6363"}
        />
      </div>
      <div className={unStake ? "show-unstake" : "hide"}>
        <p className="agency ">Cube #1437 has been selected</p>
        <button className="mint-button kasumi">UNSTAKE</button>
        <div className="line" />
        <Bar
          now={`${(2121 / 6363) * 100}%`}
          label={"Voxels Staked: 2121/6363"}
        />
      </div>
      <div className={claim ? "show-claim" : "hide"}>
        <button className="mint-button kasumi">CLAIM $WIRE</button>
        <div className="line" />
        <Bar
          now={`${(2121 / 6363) * 100}%`}
          label={"Voxels Staked: 2121/6363"}
        />
      </div>
    </div>
  );
};

export default Staking;
