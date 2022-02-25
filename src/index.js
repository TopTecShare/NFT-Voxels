import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/header";
import Footer from "./components/footer";
import backgroundVideo from "./video/background_cubes.mp4";

const Video = () => {
  const userImageLink =
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
  const downloadSize = 83131;
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    MeasureConnectionSpeed();
  }, []);

  const MeasureConnectionSpeed = () => {
    let startTime, endTime;
    let download = new Image();
    download.onload = () => {
      endTime = new Date().getTime();
      showResults();
    };
    download.onerror = (err, msg) => {
      setFlag(false);
      // alert("Oops.. some error occured.. please refresh the page..");
    };
    startTime = new Date().getTime();
    download.src = userImageLink;

    function showResults() {
      let duration = (endTime - startTime) / 1000;
      let bitsLoaded = downloadSize * 8;
      let speedBps = (bitsLoaded / duration).toFixed(2);
      let speedKbps = (speedBps / 1024).toFixed(2);
      let speedMbps = (speedKbps / 1024).toFixed(2);
      //code your need according to different network speed..:D
      if (speedMbps > 30) setFlag(true);
    }
  };
  return (
    <video autoPlay loop muted id="video">
      {flag ? <source src={backgroundVideo} type="video/mp4" /> : <></>}
    </video>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <Video />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
