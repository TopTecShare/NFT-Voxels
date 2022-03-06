import Cube from "../components/cube";
import { useMintStartTimestamp } from "../hooks/useVoxelsNFT";
import useCountdownTimer from "../hooks/useCountdownTimer";
import CountDown from "../components/countdown";

import "../styles/presalewait.css";

const PresaleWait = () => {
  const startTimestamp = useMintStartTimestamp();
  const { timerShowed, duration } = useCountdownTimer(startTimestamp);
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
