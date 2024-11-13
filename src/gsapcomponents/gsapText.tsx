import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      ease: "power1.inOut",
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        x: 70,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.4,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div>
      <h1
        id="text"
        className="opacity-0 translate-y-8 text-red-600 text-3xl font-bold"
      >
        Hello this is Gsap
      </h1>
      <p className="mt-10 text-xl text-blue-800 para">
        We can use method in gsap like
        <h1>gsap.to()</h1>
        <h1>gsap.from()</h1>
        <h1>gsap.fromTo()</h1>
        <h1>gsap.timeline()</h1>
      </p>
    </div>
  );
};

export default GsapText;
