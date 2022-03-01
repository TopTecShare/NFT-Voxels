import CountDown from "../components/countdown"
import CubeMint from "../components/cubemint"

import "../styles/presalemint.css"

const PresaleMint = () => {
  return (
    <div className="presalemint">
      <div className="presalemint-time">
        <div className="line pc-style" />
        <p className="agency pre-content">PUBLIC SALE WILL OPEN IN</p>
        <CountDown date="2022-03-28" />
      </div>
      <CubeMint />
    </div>
  )
}
export default PresaleMint
