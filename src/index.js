import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, DAppProvider, Mainnet, Rinkeby } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/header";
import Footer from "./components/footer";
// import backgroundVideo from "./video/background_cubes.mp4";
import { infuraUrl } from "./global/utils";

import "react-toastify/dist/ReactToastify.css";

// const Video = () => {
//   const userImageLink =
//     "https://ipfs.io/ipfs/QmNPSSUAu5f4Zw8ojbvaEZWqvc1ytzZmvovWa8mepQEBhd";
//   const downloadSize = 83131;
//   const [flag, setFlag] = useState(false);
//   useEffect(() => {
//     MeasureConnectionSpeed();
//   }, []);

//   const MeasureConnectionSpeed = () => {
//     let startTime, endTime;
//     let download = new Image();
//     download.onload = () => {
//       endTime = new Date().getTime();
//       showResults();
//     };
//     download.onerror = (err, msg) => {
//       setFlag(false);
//       // alert("Oops.. some error occured.. please refresh the page..");
//     };
//     startTime = new Date().getTime();
//     download.src = userImageLink;

//     function showResults() {
//       let duration = (endTime - startTime) / 1000;
//       let bitsLoaded = downloadSize * 8;
//       let speedBps = (bitsLoaded / duration).toFixed(2);
//       let speedKbps = (speedBps / 1024).toFixed(2);
//       let speedMbps = (speedKbps / 1024).toFixed(2);
//       //code your need according to different network speed..:D
//       console.log(speedMbps);
//       if (speedMbps > 3) setFlag(true);
//     }
//   };
//   return (
//     <video autoPlay loop muted id="video">
//       {flag ? <source src={backgroundVideo} type="video/mp4" /> : <></>}
//     </video>
//   );
// };

const config = {
  readOnlyChainId: ChainId.Mainnet,
  networks: [Mainnet, Rinkeby],
  readOnlyUrls: {
    [ChainId.Mainnet]: infuraUrl(ChainId.Mainnet),
    [ChainId.Rinkeby]: infuraUrl(ChainId.Rinkeby),
  },
  pollingInterval: 1000,
};

ReactDOM.render(
  <Router>
    <DAppProvider config={config}>
      <Header />
      <App />
      <ToastContainer />
      <Footer />
      {/* <Video /> */}
    </DAppProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
