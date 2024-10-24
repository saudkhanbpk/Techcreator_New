import productDesignImage from "./../../assets/relatedServices/Frame 7.png";
import appDesignImage from "./../../assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "./../../assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "./../../assets/relatedServices/Frame 7 (3).png";
import ilustrationDesignImage from "./../../assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "./../../assets/relatedServices/Frame 7 (5).png";
const RelatedServices = () => {
  const services = [
    {
      title: "Product Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: productDesignImage,
    },
    {
      title: "App Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: appDesignImage,
    },
    {
      title: "Web Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: webDesignImage,
    },
    {
      title: "Development",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: developmentDesignImage,
    },
    {
      title: "Illustration",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: ilustrationDesignImage,
    },
    {
      title: "Motion",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: motionDesignImage,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-20 text-gray-800">
        Related services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 bg-white w-[350.54px] h-[200.43px] rounded-tr-[48px] border-[2px] border-[#6D6D6D] hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`absolute -top-12 left-6 p-3 rounded-lg`}>
              <img
                src={service.icon}
                alt={service.title}
                className="w-[80px] h-[80px]"
              />
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
