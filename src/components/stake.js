import Box from "./box"

import "../styles/burning.css"

export default function () {
  return (
    <div className="stake">
      <div className="voxel-sections">
        <div className="section">
          <p>CUBE 1</p>
          <div className="flex voxel-pos">
            <Box>#1764</Box>
          </div>
        </div>
        <div className="section">
          <p>CUBE 2</p>
          <div className="flex voxel-pos">
            <Box>#0920</Box>
          </div>
        </div>
        <div className="section">
          <p>CUBE 3</p>
          <div className="flex voxel-pos">
            <Box>#0046</Box>
            <Box>#2127</Box>
          </div>
        </div>
      </div>
    </div>
  )
}
