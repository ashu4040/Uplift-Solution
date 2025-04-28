export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Experienced Team",
      description:
        "Our team consists of experienced professionals dedicated to providing exceptional service and results.",
      icon: "https://img.icons8.com/ios/48/teamwork.png",
    },
    {
      title: "Proven Results",
      description:
        "We have a track record of success stories from clients who have seen measurable improvements.",
      icon: "https://img.icons8.com/ios/48/trophy.png",
    },
    {
      title: "Innovative Solutions",
      description:
        "We use cutting-edge technology and strategies to ensure that our solutions are effective and forward-thinking.",
      icon: "https://img.icons8.com/ios/48/innovation.png",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize the needs and satisfaction of our customers in every project we undertake.",
      icon: "https://img.icons8.com/ios/48/customer-support.png",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 xl:ml-46 xl:mr-46">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-purple-600">Our Services?</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our goal is to provide you with unmatched service that exceeds
          expectations. Here's why we stand out:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {benefits.map((benefit) => (
          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 items-center relative">
            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
          Get Started Today →
        </button>
      </div>
    </div>
  );
}
