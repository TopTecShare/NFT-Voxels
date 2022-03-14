import Countdown from "../components/countdown";
import CubeMint from "../components/cubemint";
import useCountdownTimer from "../hooks/useCountdownTimer";
import { useMintStartTimestamp } from "../hooks/useVoxelsNFT";

import "../styles/publicsalemint.css";

const PresaleWait = () => {
  const startTimestamp = useMintStartTimestamp();
  const { timerShowed, duration } = useCountdownTimer(startTimestamp);
  return (
    <div className="publicsalemint">
      {timerShowed && (
        <div className="publicsalemint-time">
          <div className="line pc-style" />
          <p className="agency pre-content">PUBLIC SALE WILL OPEN IN</p>
          <Countdown duration={duration} />
        </div>
      )}
      <CubeMint isPublic={true} />
    </div>
  );
};
export default PresaleWait;
