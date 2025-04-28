const HowItWorks = () => {
  // Mock data structure
  const data = {
    How_It_Works: {
      Title: "How It Works",
    },
    Step_1: {
      Title: "Step 1: Understand the Problem",
      Description:
        "In this step, we analyze the business requirements and understand the core problems to address.",
      Img: "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg", // Replace with actual image URL
    },
    Step_2: {
      Title: "Step 2: Plan & Design",
      Description:
        "Based on the problem analysis, we create wireframes, user flows, and the initial design for the project.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg", // Replace with actual image URL
    },
    Step_3: {
      Title: "Step 3: Development",
      Description:
        "In this step, the designs are turned into functional applications using modern development technologies.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg", // Replace with actual image URL
    },
    Step_4: {
      Title: "Step 4: Testing & Launch",
      Description:
        "Finally, the app undergoes testing to ensure its functionality, after which it's launched for public use.",
      Img: "https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg", // Replace with actual image URL
    },
  };

  return (
    <div className="h-auto pt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          {data?.How_It_Works?.Title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-[40%] text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_1?.Title}
            </h3>
            <p className="text-lg p-1">{data?.Step_1?.Description}</p>
          </div>
          <div className="w-full md:w-[50%] text-center">
            <img
              src={data?.Step_1?.Img}
              alt="Step 1"
              className="w-[300px] h-auto rounded-lg mx-auto" // Set width to 300px
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-[40%] text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_2?.Title}
            </h3>
            <p className="text-lg p-1">{data?.Step_2?.Description}</p>
          </div>
          <div className="w-full md:w-[50%] text-center">
            <img
              src={data?.Step_2?.Img}
              alt="Step 2"
              className="w-[300px] h-auto rounded-lg mx-auto" // Set width to 300px
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-[40%] text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_3?.Title}
            </h3>
            <p className="text-lg p-1">{data?.Step_3?.Description}</p>
          </div>
          <div className="w-full md:w-[50%] text-center">
            <img
              src={data?.Step_3?.Img}
              alt="Step 3"
              className="w-[300px] h-auto rounded-lg mx-auto" // Set width to 300px
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-[40%] text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 overflow-hidden p-1">
              {data?.Step_4?.Title}
            </h3>
            <p className="text-lg p-1">{data?.Step_4?.Description}</p>
          </div>
          <div className="w-full md:w-[50%] text-center">
            <img
              src={data?.Step_4?.Img}
              alt="Step 4"
              className="w-[300px] h-auto rounded-lg mx-auto" // Set width to 300px
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
