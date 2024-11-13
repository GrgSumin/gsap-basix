import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function GsapTo() {
  useGSAP(() => {
    gsap.to("#red-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.in",
    });
  }, []);
  return (
    <div>
      <div className="">
        <div id="red-box" className="h-20 w-20 bg-red-500 rounded-sm"></div>
      </div>
    </div>
  );
}

export default GsapTo;
