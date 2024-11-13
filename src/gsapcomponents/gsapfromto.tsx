import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#gray-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "50%",
        rotation: 360,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div>
      <div className="">
        <div id="gray-box" className="h-20 w-20 bg-gray-500 rounded-sm"></div>
      </div>
    </div>
  );
};

export default GsapFromTo;
