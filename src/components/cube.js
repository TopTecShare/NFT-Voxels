import voxels from "../img/Main Cube.png"

import "../styles/cube.css"

export default function () {
  return (
    <div className="voxels">
      <div>
        <img src={voxels} />
      </div>
      <div className="mint-action">
        <p className="agency price">Price: 0.1 ETH</p>

        <div>
          <button className="minus agency">-</button>
          <a className="value agency">3</a>
          <button className="plus agency">+</button>
        </div>
        <button className="mint-button kasumi">MINT</button>
        <p className="agency eligible">* ELIGIBLE TO MINT 3 *</p>
      </div>
    </div>
  )
}
