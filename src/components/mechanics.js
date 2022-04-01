import "../styles/mechanics.scss";
import box from "../img/box.png";

const MechanicsContent = ({ h2, h3, children }) => {
  return (
    <div className="mscontent">
      <div className="container">
        <div>
          <img src={box} alt={h3} />
        </div>
        <h2>{h2}</h2>
        <h3 className="agency">{h3}</h3>
        <p className="agencyr">{children}</p>
      </div>
    </div>
  );
};

const Mechanics = () => {
  return (
    <div className="mechanics">
      <h1>THE MECHANICS</h1>
      <div className="linebox">
        <div className="line"></div>
      </div>
      <MechanicsContent h2="DISCOVERY" h3="The Birth">
        Receive your Genesis Voxel.
      </MechanicsContent>
      <MechanicsContent h2="STAGE I: NOISE" h3="Add Sound">
        Unmute your Genesis Voxel.
      </MechanicsContent>
      <MechanicsContent h2="STAGE II: FILTER" h3="Add Style">
        Flair your Genesis Voxel.
      </MechanicsContent>
      <MechanicsContent h2="STAGE III: MOTION" h3="Add Movement">
        Bring life to your Genesis Voxel.
      </MechanicsContent>
      <MechanicsContent h2="RE-DISCOVERY" h3="Final Form">
        Voxelverse reached for all Genesis Voxels.
      </MechanicsContent>
    </div>
  );
};

export default Mechanics;
