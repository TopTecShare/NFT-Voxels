const MechanicsContent = ({ h2, h3, children }) => {
  return (
    <div className="mscontent">
      <div></div>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
      <p>{children}</p>
    </div>
  );
};

const Mechanics = () => {
  return (
    <div className="mechanics">
      <h1>THE MECHANICS</h1>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Mechanics;
