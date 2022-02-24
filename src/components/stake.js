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
    <div className="stake">
      <div className="voxel-sections">
        <div className="section">
          <p>CUBE 1</p>
          <div className="flex">
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
          </div>
        </div>
      </div>
    </div>
  )
}
