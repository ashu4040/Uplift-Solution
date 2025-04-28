import Form from "./Form";

const Testimonial = () => {
  const faqs = [
    "What IT services do you offer?",
    "How do you ensure the security of my business data?",
    "Do you offer customized software solutions?",
    "Can you help with cloud migration?",
    "What industries do you specialize in?",
    "How do you handle support and maintenance for your IT solutions?",
  ];

  return (
    <div className="p-10 xl:ml-46 xl:mr-46">
      <h2 className="text-center text-3xl font-bold mb-6">
        Our Clients Love Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Helping businesses transform with cutting-edge IT solutions!
      </p>

      {/* Removed Testimonials Section */}

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((question, index) => (
              <details key={index} className="p-4 bg-white shadow rounded-lg">
                <summary className="font-semibold cursor-pointer">
                  {question}
                </summary>
                <p className="text-gray-600 mt-2">
                  We provide comprehensive answers tailored to your business
                  needs, ensuring the highest standards of service and security.
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-2xl border-t-5 border-t-purple-600 md:w-1/2 max-w-md">
          <h2 className="text-xl font-bold text-gray-800">
            Transform Your IT Infrastructure
          </h2>
          <Form />
        </div>
      </div>

      <footer className="mt-12 py-6 bg-gray-200 text-center">
        <h4 className="text-lg font-semibold">UPLIFT SOLUTION</h4>
        <p className="text-gray-600">
          Empowering businesses with innovative IT solutions and support.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex items-center gap-2">📞 +91 98187 80337</div>
          <div className="flex items-center gap-2">📍 Gurgaon, Haryana</div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonial;
