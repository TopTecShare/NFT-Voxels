import voxels from "../img/Main Cube.png";
import selectbox from "../img/Selection Box.png";
import lock from "../img/Lock Icon.png";

import { useState } from "react";

const Box = ({ isLock, children, onSelect, allowed = true }) => {
  const [selectBox, setSelectBox] = useState(false);

  const selectFunc = () => {
    if (!allowed) return;
    setSelectBox(!selectBox);
    onSelect(!selectBox);
  };

  return (
    <div onClick={selectFunc} className="voxels-element">
      <div>
        <img src={voxels} className="voxel-pic" />
        {isLock ? <img src={lock} className="lock" /> : <></>}
      </div>
      <div>
        <p className="voxel-letter">{children}</p>
      </div>
      <div>
        <img src={selectbox} className={selectBox ? "select-box" : "hide"} />
      </div>
    </div>
  );
};

export default Box;
