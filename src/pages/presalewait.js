import Cube from "../components/cube"
import CountDown from "../components/countdown"

import "../styles/presalewait.css"

const PresaleWait = () => {
  return (
    <div className="presalewait">
      <div className="cube">
        <div className="agency pub-eligible">ELIGIBLE FOR PRESALE</div>
        <Cube />
        <div className="pub-content">
          <p className="agency pre-content">PUBLIC SALE WILL OPEN IN</p>
          <CountDown date="2022-03-28" />
        </div>
      </div>
    </div>
  )
}
export default PresaleWait
