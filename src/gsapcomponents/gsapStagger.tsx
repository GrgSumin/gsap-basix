import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to("#yellow-box", {
      y: 250,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        ease: "power1.inOut",
        from: "center",
      },
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
    });
  }, []);
  return (
    <div>
      <div className="flex">
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-500 rounded-sm"
        ></div>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-300 rounded-sm"
        ></div>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-400 rounded-sm"
        ></div>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-600 rounded-sm"
        ></div>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-800 rounded-sm"
        ></div>
      </div>
    </div>
  );
};

export default GsapStagger;
