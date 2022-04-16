import Team from "./team";
import Mechanics from "./mechanics";
import Roadmap from "./roadmap";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard kasumi">
      <Roadmap />
      <Mechanics />
      <Team />
    </div>
  );
};

export default Dashboard;
