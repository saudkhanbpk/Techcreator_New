import PricingLayout from "../components/layout/PricingLayout";
import { useState } from "react";
import backImage from './../assets/pricing_images/64fee6e4d18cb43d557f7c5d_6336046db53d9981fd90a40c_career-header-p-500.webp.png'
import frontImage from './../assets/pricing_images/List → Listitem.png'
function Pricing() {
  return (
    <>
      <PricingLayout>
        <PricingHeroSection />
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
          <div className="max-w-6xl mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 py-10 md:py-20 px-6 md:px-20">
          <div className="mt-6 md:mt-10 space-y-5">
            <h1 className="text-[#004540] font-inter font-medium text-3xl md:text-[45.25px]">Innovation Unleashed</h1>
            <p className="text-[#004540] font-inter font-normal text-lg md:text-[20px] mt-4 md:mt-0">
              Dive into the future with our state-of-the-art products and services. From software development to hardware solutions, we are the architects of your digital dreams.
            </p>
          </div>
          <div className="relative w-full md:w-[480px] h-[400px] md:h-[549.42px] mx-auto md:mx-0">

            <div className="relative z-10 w-full h-full">
              <div className="w-[600px]">
                <img
                  src={backImage}
                  alt="Background"
                  className="absolute inset-0   rounded-2xl "
                />
              </div>
              <img
                src={frontImage}
                alt="Foreground"
                className="absolute inset-0  rounded-2xl"
              />
            </div>
          </div>
        </div>
      </PricingLayout>
    </>
  );
}

export default Pricing;

function PricingHeroSection() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      name: "BASIC",
      price: isYearly ? 180 : 15,
      features: [
        "Personalized Workout",
        "Exercise Form Correction",
        "Lifestyle Plan",
      ],
    },
    {
      name: "STANDARD",
      price: isYearly ? 120 : 10,
      features: [
        "Personalized Workout",
        "Exercise Form Correction",
        "Lifestyle Plan",
        "Personalized Program",
      ],
    },
    {
      name: "PREMIUM",
      price: isYearly ? 84 : 7,
      features: [
        "Personalized Workout",
        "Exercise Form Correction",
        "Lifestyle Plan",
        "Personalized Program",
        "8 12 Weeks Plan",
      ],
    },
  ];
  return (
    <div className="relative bg-gray-900 text-white h-auto md:h-[420px] px-4">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/a9cc/6929/3db1f6cddf03872eab454aad5671343e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1-Qh-2cTi2DVPnP699M0Fo~0h2a4NoLTQ~ehngrhalUMU5VZx0qPThfFHzL1jAEBVYi9ypCydZt--uF7CXm-IkIEg5Q3oKNI1jGXolQFWPLOyVrckswWw8RMkEGGvhJagpJ-cJ934cTv2S9w~6GletQ~fN6YczEmJb3RWs~fq2QJvVir4QHIDRmRHaPR-pSfxQiTOTMkHbjeJBt2b-hRkAxahuAq5hTDTT3Y1X5E6uZI8HZutUyzZLQcKifVSqQ4nQPDnf9OvO0wNU-Es8gqKr3mkWNhyMxm18Chmt8bObkPdOKjMrZDmJDr48Fd1kA7ZYC823vS1h-ukBGy6X~WQ__"
          alt="Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className=" sm:px-6 py-24 md:py-32 relative max-w-[1440px] mx-auto container">
        <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center">
          PRICING
        </h1>
        <p className="text-lg md:text-xl font-normal mb-8 text-white text-center">
          TechCreator easy to use. Whether you need a simple mobile app or a
          complex web application, TechCreator has the expertise to deliver
          high-quality solutions that excel about our web and mobile app
          development services.
        </p>

        <div className="flex justify-center mb-8">
          <div className="bg-[black] p-1 rounded-[12px]">
            <button
              className={`px-4 py-2  rounded-[10px] ${!isYearly ? "bg-[#FFFFFF] text-[black]" : "bg-[black] text-white"
                }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-[10px] ${isYearly ? "bg-[#FFFFFF] text-[black]" : "bg-[black] text-white"
                }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#4848485C]  bg-gray-800 w-full md:w-[359px] h-auto md:h-[604.11px] rounded-lg p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="mb-6 text-[14.86px] font-normal font-inter">Membership</p>
              <div className="text-[49.52px] font-inter font-medium  items-center">
                ${plan.price}
                <span className="text-[14.86px] font-semibold">/package</span>
              </div>
              {(index === 1 || index === 2) && (
                <p className="font-normal text-[14.86px]">
                  {index === 1 ? "Save $30" : "Save $150"}
                </p>
              )}
              &nbsp;
              <div className="border-[#AEAEAE] border-[1.24px] mb-8" />
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-6  flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
                    <p className="text-[14.86px] text-[#FFFFFF] font-inter leading-[19.36px] font-normal ">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
