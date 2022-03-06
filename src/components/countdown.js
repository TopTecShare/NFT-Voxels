import React from "react";
import "../styles/countdown.css";

export default function Countdown({ duration }) {
  return (
    <div className="Countdown kasumi">
      <span className="Countdown-col">{duration.days}</span>

      <span className="Countdown-col">:</span>

      <span className="Countdown-col">{duration.hours}</span>

      <span className="Countdown-col">:</span>

      <span className="Countdown-col">{duration.minutes}</span>

      <span className="Countdown-col">:</span>

      <span className="Countdown-col">{duration.seconds}</span>
    </div>
  );
}
