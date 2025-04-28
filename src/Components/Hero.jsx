import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around p-4 md:p-8 bg-purple-50  lg:h-[calc(100vh-23vh)]">
      {/* Text Content */}
      <div className="max-w-lg w-full space-y-4 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-purple-700">
          <span>Unleash Your Business Potential with Our</span>{" "}
          <span>IT Managed Services</span>
        </h1>

        <p className="text-gray-600 mt-4 md:mt-8 text-sm md:text-base">
          Uplift Solution Inc, is a leading consulting firm specializing in IT
          staffing and consulting services. We connect businesses with top-tier
          technology talent, providing tailored solutions to meet evolving
          workforce and project needs. With a deep industry network and
          expertise, we help organizations scale efficiently, optimize IT
          operations, and drive innovation. Whether you need skilled
          professionals for short-term projects or long-term strategic support,
          we deliver flexible and effective staffing solutions to ensure your
          success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-6 md:mt-8">
          <div>
            <p className="text-lg font-semibold">Custom Solutions</p>
            <p className="text-gray-500 text-sm">Exceptional Results</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Expertise Across</p>
            <p className="text-gray-500 text-sm">All Technology Platforms</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Cloud Solutions</p>
            <p className="text-gray-500 text-sm">For Your Growth</p>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start bg-white h-fit w-fit p-3 rounded-lg shadow mt-6 md:mt-8">
          <img
            className="w-6 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="Google Rating"
          />
          <h2 className="font-medium text-lg text-yellow-500">★★★★★ 4.8</h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white w-full max-w-md p-6 mt-10 lg:mt-0 rounded-lg shadow-2xl border-t-4 border-purple-600">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center lg:text-left mb-4">
          Let's Optimize Your IT Infrastructure
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default Hero;
