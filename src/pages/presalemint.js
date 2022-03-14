import CountDown from "../components/countdown";
import CubeMint from "../components/cubemint";
import { useMintStartTimestamp } from "../hooks/useVoxelsNFT";
import useCountdownTimer from "../hooks/useCountdownTimer";

import "../styles/presalemint.css";

const PresaleMint = () => {
  const startTimestamp = useMintStartTimestamp();
  const { timerShowed, duration } = useCountdownTimer(startTimestamp);

  return (
    <div className="presalemint">
      {timerShowed && (
        <div className="presalemint-time">
          <div className="line pc-style" />
          <p className="agency pre-content">PRESALE WILL OPEN IN</p>
          <CountDown duration={duration} />
        </div>
      )}
      <CubeMint isSelection={true} />
    </div>
  );
};
export default PresaleMint;
