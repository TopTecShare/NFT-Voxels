import Box from "./box";

import "../styles/staking.css";

export default function () {
  return (
    <div className="unstake">
      <div className="voxel-sections">
        <div className="section">
          <p>CUBE 1</p>
          <div className="flex">
            <Box isLock={true}>#0342</Box>
          </div>
        </div>
        <div className="section">
          <p>CUBE 2</p>
          <div className="flex">
            <Box isLock={true}>#1437</Box>
          </div>
        </div>
        <div className="section">
          <p>CUBE 3</p>
          <div className="flex">
            <Box isLock={true}>#3511</Box>
          </div>
        </div>
      </div>
    </div>
  );
}
