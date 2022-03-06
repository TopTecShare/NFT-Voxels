import { useEffect, useRef, useState } from "react";
import { convertToDuration } from "../global/utils";

export default function useCountdownTimer(targetTime) {
  const intervalRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const timerShowed =
    targetTime > 0 && currentTime > 0 && currentTime <= targetTime;
  const duration = convertToDuration(currentTime, targetTime);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(
        () => setCurrentTime(Math.floor(new Date().getTime() / 1000)),
        1000
      );
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (targetTime > 0 && currentTime > 0 && currentTime > targetTime) {
      clearInterval(intervalRef.current);
    }
  }, [targetTime, currentTime]);

  return {
    timerShowed,
    duration,
  };
}
