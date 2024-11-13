import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current?.children || []);

      boxes.forEach((box: any) => {
        gsap.to(box, {
          x: 250 * (boxes.indexOf(box) + 1),
          rotation: 360,
          scale: 2,
          borderRadius: "50%",
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 40%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  ); //it will know when animations actually start
  return (
    <>
      <div className="border-2 h-96 w-96 bg-blue-500 rounded-sm"></div>
      <div className="mt-[500px] h-screen w-full" ref={scrollRef}>
        <div
          id="yellow-box"
          className="h-20 w-20 bg-yellow-500 rounded-sm"
        ></div>
        <div id="yellow-box" className="h-20 w-20 bg-red-500 rounded-sm"></div>
      </div>
    </>
  );
};

export default GsapScrollTrigger;
