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
import Header from "./components/header";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  backDrop: {
    backdropFilter: "blur(1px)",
    backgroundColor:
      "radial-gradient(105.26% 224.06% at -1.44% -2.01%, rgba(0, 0, 0, 0.5) 0%, #000000 10%)",
  },
}));

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className="App">
      <Header openMenu={setOpen} />
      <Modal
        className="menu-modal"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <Fade in={open}>
          <div className="menu agency">
            <p>
              <a href="#about" onClick={() => setOpen(false)}>
                About Us
              </a>
            </p>
            <p>
              <a href="#roadmap" onClick={() => setOpen(false)}>
                Roadmap
              </a>
            </p>
            <p>
              <a href="#mechanics" onClick={() => setOpen(false)}>
                Mechanics
              </a>
            </p>
            <p>
              <a
                href="https://medium.com/@voxelsnft"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Medium
              </a>
            </p>
            <p>
              <a
                href="https://whitepaper.voxels-nft.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Whitepaper
              </a>
            </p>
            <p>
              <a href="#team" onClick={() => setOpen(false)}>
                Team
              </a>
            </p>
          </div>
        </Fade>
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
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
        <Route path="/publicsalemint" element={<PublicSaleMint />} />
      </Routes>
    </div>
  );
}

export default App;
