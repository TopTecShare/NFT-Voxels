const RoadmapContent = ({ h2, style, children }) => {
  return (
    <div className="rdcontent">
      <h2>{h2}</h2>
      <p>{children}</p>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1>ROADMAP</h1>
      <div></div>
      <div>
        <nav></nav>
        <article></article>
      </div>
    </div>
  );
};

export default Roadmap;
