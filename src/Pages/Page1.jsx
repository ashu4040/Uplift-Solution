import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";

export default function Page1() {
  const navRef = useRef();
  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(heroRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="sm:h-screen lg:max-h-screen">
      <div ref={navRef}>
        <NavBar />
      </div>

      <div ref={heroRef}>
        <Hero />
      </div>
    </div>
  );
}
