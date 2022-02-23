import Cube from "../components/cube"
import CountDown from "../components/countdown"

import "../styles/publicsalemint.css"

export default function () {
  return (
    <div className="publicsalemint">
      <div className="cube">
        <div className="agency pub-eligible">ELIGIBLE FOR PRESALE</div>
        <Cube />
        <div className="pub-content">
          <p className="agency pre-content">PUBLIC SALE WILL OPEN IN</p>
          <CountDown date="2022-02-28" />
        </div>
      </div>
    </div>
  )
}
