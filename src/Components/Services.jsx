export default function Services() {
  const caseStudies = [
    {
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
      category: "Website Developer",
      title: "Revamping WebWorks' Online Identity",
      description:
        "We helped WebWorks redesign their website to improve user experience, SEO rankings, and boost lead generation through responsive designs.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65a790f0493b6806e60d6e21/660e8ac66813866c71248853_Choosing-a-Mobile-App-Framework.jpeg",
      category: "App Developer",
      title: "Scaling Appify's Mobile User Base",
      description:
        "We supported Appify in enhancing their mobile app's visibility, increasing downloads through ASO strategies, and improving user retention rates.",
    },
    {
      image:
        "https://blog.codeasite.com/wp-content/uploads/2018/11/CSP-Microsoft-codeasite.jpg", // Cloud solutions
      category: "Cloud Solutions Provider",
      title: "Transforming SkyNet’s Cloud Visibility",
      description:
        "We helped SkyNet Solutions establish a stronger digital presence, generate cloud service leads, and optimize their client acquisition funnel.",
    },
  ];

  return (
    <section className=" mt-8 md:mt-0 text-center px-4 md:px-8 xl:px-32">
      <h2 className="text-4xl font-bold text-gray-800">Services</h2>
      <p className="text-gray-600 mt-2">
        Discover how we help developers and IT solution companies achieve growth
        and innovation through smart digital strategies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="text-purple-600 text-sm font-medium mt-4 inline-block">
              {study.category}
            </span>
            <h3 className="text-lg font-semibold mt-2">{study.title}</h3>
            <p className="text-gray-600 mt-2">{study.description}</p>
            <button className="mt-4 text-purple-700 font-medium hover:underline">
              View Case Study →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
