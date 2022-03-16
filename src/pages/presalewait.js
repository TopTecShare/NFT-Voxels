import { useEffect } from "react";
import Cube from "../components/cube";
import { useMintStartTimestamp } from "../hooks/useVoxelsNFT";
import useCountdownTimer from "../hooks/useCountdownTimer";
import CountDown from "../components/countdown";
import { useNavigate } from "react-router-dom";

import "../styles/presalewait.css";
import { useEthers } from "@usedapp/core";

const PresaleWait = () => {
  const navigate = useNavigate();
  const startTimestamp = useMintStartTimestamp();
  const { timerShowed, duration } = useCountdownTimer(startTimestamp);
  const { account } = useEthers();

  useEffect(() => {
    if (account && !timerShowed && startTimestamp) {
      navigate("/presalemint");
    }
  }, [account, navigate, timerShowed, startTimestamp]);

  return (
    <div className="presalewait">
      <div className="cube">
        <div className="agency pub-eligible">ELIGIBLE FOR PRESALE</div>
        <Cube />
        {timerShowed && (
          <div className="pub-content">
            <p className="agency pre-content">PRESALE WILL OPEN IN</p>
            <CountDown duration={duration} />
          </div>
        )}
      </div>
    </div>
  );
};
export default PresaleWait;
