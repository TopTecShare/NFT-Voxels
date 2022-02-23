import CountDown from "../components/countdown"

export default function () {
  return (
    <div className="presalemint">
      <div className="presalemint-time">
        <div className="line" />
        <p>PUBLIC SALE WILL OPEN IN</p>
        <CountDown date="2022-02-28" />
      </div>
    </div>
  )
}
