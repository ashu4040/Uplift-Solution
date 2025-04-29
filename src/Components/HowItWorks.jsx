import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const data = {
    How_It_Works: {
      Title: "How It Works",
    },
    Step_1: {
      Title: "Step 1: Understand the Problem",
      Description:
        "In this step, we analyze the business requirements and understand the core problems to address.",
      Img: "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg",
    },
    Step_2: {
      Title: "Step 2: Plan & Design",
      Description:
        "Based on the problem analysis, we create wireframes, user flows, and the initial design for the project.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg",
    },
    Step_3: {
      Title: "Step 3: Development",
      Description:
        "In this step, the designs are turned into functional applications using modern development technologies.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg",
    },
    Step_4: {
      Title: "Step 4: Testing & Launch",
      Description:
        "Finally, the app undergoes testing to ensure its functionality, after which it's launched for public use.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg",
    },
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.utils
        .toArray([".img1", ".img2", ".img3", ".img4"])
        .forEach((cls, i) => {
          gsap.from(cls, {
            x: i % 2 === 0 ? 200 : -200,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: cls,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.utils
        .toArray([".img1", ".img2", ".img3", ".img4"])
        .forEach((cls) => {
          gsap.from(cls, {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: cls,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="pt-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          {data.How_It_Works.Title}
        </h2>
      </div>

      {[data.Step_1, data.Step_2, data.Step_3, data.Step_4].map(
        (step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 mb-12`}
          >
            <div className="w-full md:w-1/2 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {step.Title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                {step.Description}
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img
                src={step.Img}
                alt={step.Title}
                className={`img${
                  index + 1
                } w-[300px] sm:w-[400px] h-auto rounded-lg mx-auto`}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default HowItWorks;
