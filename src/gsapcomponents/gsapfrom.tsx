import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#red-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div>
      <div className="">
        <div id="red-box" className="h-20 w-20 bg-green-500 rounded-sm"></div>
      </div>
    </div>
  );
};

export default GsapFrom;
