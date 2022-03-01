import refresh from "../img/Refresh Button.png";
import Box from "../components/box";
import "../styles/burning.css";

const Burning = () => {
  return (
    <div className="burning">
      <div className="voxel-box">
        <div className="voxel-box-title">
          <p className="agency balance">Balance: 36.74 WIRE</p>
          <img src={refresh} className="refresh" alt="refresh" />
        </div>
        <div className="voxel-sections">
          <div className="section">
            <p>CUBE 1</p>
            <div className="flex">
              <Box>#0342</Box>
              <Box>#1764</Box>
            </div>
          </div>
          <div className="section">
            <p>CUBE 2</p>
            <div className="flex">
              <Box>#0920</Box>
              <Box>#1437</Box>
            </div>
          </div>
          <div className="section">
            <p>CUBE 3</p>
            <div className="flex">
              <Box>#0046</Box>
              <Box>#2127</Box>
              <Box>#3511</Box>
            </div>
          </div>
        </div>
        <p className="balance agency">
          * Eligible for burn. Select one Cube from EACH group. *
        </p>
      </div>
      <div>
        <p className="agency select-cube">Cube #0342, #1437, #0046 selected</p>
      </div>
      <div>
        <button className="kasumi mint-button">BURN</button>
      </div>
      <p className="agency cost-cube">Cost: 30 $WIRE</p>
    </div>
  );
};

export default Burning;
