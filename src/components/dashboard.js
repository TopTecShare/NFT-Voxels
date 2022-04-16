import Team from "./team";
import Mechanics from "./mechanics";
import Roadmap from "./roadmap";
import About from "./about";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard kasumi">
      <About />
      <Roadmap />
      <Mechanics />
      <Team />
    </div>
  );
};

export default Dashboard;
