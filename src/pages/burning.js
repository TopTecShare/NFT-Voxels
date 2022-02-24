import refresh from "../img/Refresh Button.png"
import voxels from "../img/Main Cube.png"
import selectbox from "../img/Selection Box.png"

import { useState } from "react"

import "../styles/burning.css"

export default function () {
  const [selectBox, setSelectBox] = useState(false)

  const selectFunc = () => {
    setSelectBox(!selectBox)
  }

  return (
    <div className="burning">
      <div className="voxel-box">
        <div className="voxel-box-title">
          <p className="agency balance">Balance: 36.74 WIRE</p>
          <img src={refresh} className="refresh" />
        </div>
        <div className="voxel-sections">
          <div className="section">
            <p>CUBE 1</p>
            <div className="flex">
              <div onClick={selectFunc} className="voxels-element">
                <div>
                  <img src={voxels} className="voxel-pic" />
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
              <div onClick={selectFunc} className="voxels-element">
                <div>
                  <img src={voxels} className="voxel-pic" />
                </div>
                <div>
                  <a className="voxel-letter">#1764</a>
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
                </div>
                <div>
                  <a className="voxel-letter">#0920</a>
                </div>
                <div>
                  <img
                    src={selectbox}
                    className={selectBox ? "select-box" : "hide"}
                  />
                </div>
              </div>
              <div onClick={selectFunc} className="voxels-element">
                <div>
                  <img src={voxels} className="voxel-pic" />
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
                </div>
                <div>
                  <a className="voxel-letter">#0046</a>
                </div>
                <div>
                  <img
                    src={selectbox}
                    className={selectBox ? "select-box" : "hide"}
                  />
                </div>
              </div>
              <div onClick={selectFunc} className="voxels-element">
                <div>
                  <img src={voxels} className="voxel-pic" />
                </div>
                <div>
                  <a className="voxel-letter">#2127</a>
                </div>
                <div>
                  <img
                    src={selectbox}
                    className={selectBox ? "select-box" : "hide"}
                  />
                </div>
              </div>
              <div onClick={selectFunc} className="voxels-element">
                <div>
                  <img src={voxels} className="voxel-pic" />
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
        <p className="balance agency">
          * Eligible for burn. Select one Cube from EACH group. *
        </p>
      </div>
      <div>
        <p className="agency select-cube">Cube #0342, #1437, # 0046 selected</p>
      </div>
      <div>
        <button className="kasumi mint-button">BURN</button>
      </div>
      <p className="agency cost-cube">Cost: 30 $WIRE</p>
    </div>
  )
}
