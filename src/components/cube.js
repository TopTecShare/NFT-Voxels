import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/home.css";
import voxels from "../img/Main Cube.png";

export default function () {
  const el = useRef(null);
  const [hover, setHover] = useState(false);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setTimeout(calculatePosition, 400);
    attachEventsListener();
  });

  const cubeAnimation = () => {
    el.current.style.transform = "scale(1.2, 1.2)";
    el.current.style.transition = "0.5s ease-in-out";
    setTimeout(() => {
      el.current.style.transform = "scale(1, 1)";
      el.current.style.transition = "0.5s ease-in-out";
    }, 500);
    setTimeout(() => {
      el.current.style.transition = "0s ease-in-out";
    }, 1000);
  };

  const attachEventsListener = () => {
    window.addEventListener("resize", calculatePosition);
  };

  const calculatePosition = () => {
    gsap.set(el.current, {
      x: 0,
      y: 0,
      scale: 1,
    });
    const box = el.current.getBoundingClientRect();
    setX(box.left + box.width * 0.5);
    setY(box.top + box.height * 0.5);
    setWidth(box.width);
  };

  const onMouseMove = (e) => {
    let hv = false;
    let hoverArea = hover ? 0.7 : 0.5;
    let tx = e.clientX - x;
    let ty = e.clientY - y;
    let distance = Math.sqrt(tx * tx + ty * ty);

    if (distance < width * hoverArea) {
      hv = true;
      if (!hover) {
        setHover(true);
      }
      onHover(e.clientX, e.clientY);
    }

    if (!hv && hover) {
      onLeave();
      setHover(false);
    }
  };

  const onHover = (tx, ty) => {
    gsap.to(el.current, {
      x: (tx - x) * 0.4,
      y: (ty - y) * 0.4,
      scale: 1.15,
      ease: "Power2.easeOut",
      duration: 0.4,
    });
    el.current.style.zIndex = 10;
  };

  const onLeave = () => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      scale: 1,
      ease: "Elastic.easeOut(1.2, 0.4)",
      duration: 0.7,
    });
    el.current.style.zIndex = 1;
  };

  return (
    <div onClick={cubeAnimation} onMouseMove={onMouseMove}>
      <img src={voxels} ref={el} />
    </div>
  );
}
