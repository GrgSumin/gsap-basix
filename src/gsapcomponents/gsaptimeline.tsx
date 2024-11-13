import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "50%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      y: 250,
      rotation: 360,
      scale: 2,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      x: 500,
      rotation: 360,
      borderRadius: "20%",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div>
      <div className="">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
        >
          Play/Pause
        </button>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-500 rounded-sm"
        ></div>
      </div>
    </div>
  );
};

export default GsapTimeline;
