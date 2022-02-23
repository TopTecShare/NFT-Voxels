import "../styles/bar.css"

const Bar = ({ now, label }) => {
  return (
    <div className="bar">
      <div className="wrapper">
        <div className="bg" style={{ width: now }}>
          <div className="el agency" label={label}></div>
        </div>
      </div>
    </div>
  )
}

export default Bar
