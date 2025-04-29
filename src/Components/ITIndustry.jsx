import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ITSectorsUI() {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(containerRef.current.querySelectorAll(".box-item"), {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center p-6 md:p-12 mt-12"
      ref={containerRef}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
        We drive digital success in the
        <span className="text-purple-600"> IT Industry</span>
      </h1>

      <p className="mt-3 text-gray-600 max-w-2xl text-center">
        We've mastered the art of marketing for tech companies. From startups to
        large enterprises, we create tailored strategies that help you scale,
        innovate, and lead in your space.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          { icon: "💻", label: "Web Development" },
          { icon: "📱", label: "Mobile App Development" },
          { icon: "☁️", label: "Cloud Services" },
          { icon: "🔒", label: "Cybersecurity Solutions" },
          { icon: "🛒", label: "E-commerce Solutions" },
          { icon: "🧠", label: "AI & Machine Learning" },
          { icon: "📈", label: "Digital Marketing" },
          { icon: "🖥️", label: "Software Development" },
        ].map((item, index) => (
          <div
            key={index}
            className="box-item bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center xl:w-40 h-32"
          >
            <span className="text-3xl">{item.icon}</span>
            <p className="mt-2 text-gray-700 text-sm text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition flex items-center gap-2">
        Boost Your Digital Growth Now <span>🚀</span>
      </button>
    </div>
  );
}
