import voxels from "../img/Main Cube.png"
import selectbox from "../img/Selection Box.png"
import lock from "../img/Lock Icon.png"

import { useState } from "react"

import "../styles/staking.css"

export default function () {
  const [selectBox, setSelectBox] = useState(false)

  const selectFunc = () => {
    setSelectBox(!selectBox)
  }

  return (
    <div className="unstake">
      <div className="voxel-sections">
        <div className="section">
          <p>CUBE 1</p>
          <div className="flex">
            <div onClick={selectFunc} className="voxels-element">
              <div>
                <img src={voxels} className="voxel-pic" />
                <img src={lock} className="lock" />
              </div>
              <div>
                <a className="voxel-letter">#0342</a>
              </div>
              <div>
                <img
                  src={selectbox}
                  className={selectBox ? "select-box" : "hide"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <p>CUBE 2</p>
          <div className="flex">
            <div onClick={selectFunc} className="voxels-element">
              <div>
                <img src={voxels} className="voxel-pic" />
                <img src={lock} className="lock" />
              </div>
              <div>
                <a className="voxel-letter">#1437</a>
              </div>
              <div>
                <img
                  src={selectbox}
                  className={selectBox ? "select-box" : "hide"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <p>CUBE 3</p>
          <div className="flex">
            <div onClick={selectFunc} className="voxels-element">
              <div>
                <img src={voxels} className="voxel-pic" />
                <img src={lock} className="lock" />
              </div>
              <div>
                <a className="voxel-letter">#3511</a>
              </div>
              <div>
                <img
                  src={selectbox}
                  className={selectBox ? "select-box" : "hide"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
