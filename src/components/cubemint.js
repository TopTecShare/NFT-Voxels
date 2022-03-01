import voxels from "../img/Main Cube.png";

import Bar from "./progressbar";
import Cube from "./cube";

import "../styles/cube.css";

export default function () {
  return (
    <div>
      <div className="cube">
        <Cube />
      </div>

      <div className="mint-action">
        <p className="agency price">Price: 0.1 ETH</p>
        <Bar now={`${(2000 / 6000) * 100}%`} label={"Minted: 2000/6000"} />
        <div>
          <button className="minus agency">-</button>
          <a className="value agency">3</a>
          <button className="plus agency">+</button>
        </div>
        <button className="mint-button kasumi">MINT</button>
        <p className="agency eligible">* ELIGIBLE TO MINT 3 *</p>
      </div>
    </div>
  );
}
