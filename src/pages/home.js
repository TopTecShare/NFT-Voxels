// import Cube from "../components/cube"
import Dashboard from "../components/dashboard";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="cube">{/* <Cube /> */}</div>
      <Dashboard />
    </div>
  );
};

export default Home;
