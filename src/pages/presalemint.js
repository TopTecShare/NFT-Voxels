import CountDown from "../components/countdown"
import Cube from "../components/cube"

import "../styles/presalemint.css"

export default function () {
  return (
    <div className="presalemint">
      <div className="presalemint-time">
        <div className="line pc-style" />
        <p className="agency pre-content">PUBLIC SALE WILL OPEN IN</p>
        <CountDown date="2022-02-28" />
      </div>
      <Cube />
    </div>
  )
}
