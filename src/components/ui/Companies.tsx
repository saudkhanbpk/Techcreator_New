import React from "react";
import company1 from "./../../assets/companies/image 182.png";
import company2 from "./../../assets/companies/image 152.png";
import company3 from "./../../assets/companies/image 150.png";
import company4 from "./../../assets/companies/image 181.png";
import company5 from "./../../assets/companies/image 149.png";
import company6 from "./../../assets/companies/Group 40.png";
import company7 from "./../../assets/companies/Rectangle 21848.png";
import CommonButton from "../common/Button";
function Companies() {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF] h-[93px] py-5 px-4 md:px-10">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="flex justify-center items-center mb-2">
            <img src={company1} alt="" className="w-[120px] h-auto md:w-[140px] md:h-[45px]" />
          </div>
          <div className="flex justify-center items-center mb-2">
            <img src={company2} alt="" className="w-[120px] h-auto md:w-[140px] md:h-[45px]" />
          </div>
          <div className="flex justify-center items-center mb-2">
            <img src={company3} alt="" className="w-[120px] h-auto md:w-[140px] md:h-[45px]" />
          </div>
          <div className="flex justify-center items-center mb-2">
            <img src={company4} alt="" className="w-[120px] h-auto md:w-[140px] md:h-[45px]" />
          </div>
          <div className="flex justify-center items-center mb-2">
            <img src={company5} alt="" className="w-[120px] h-auto md:w-[140px] md:h-[45px]" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Companies;

export const CTASection = () => {
  return (
    <section className="py-16">
      <div className=" bg-[#FFFFFF] mx-auto w-[95%] h-[380px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 px-6 py-16 leading-10">
            <h2 className="text-2xl font-inter md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something great together. Get in touch today!"
            </h2>
            <div className="flex justify-center md:justify-start">
              <div className="relative md:left-8">
                <div>
                  <img src={company6} alt="button_image" className="w-[123.83px] h-[191px]" />
                </div>
                <div className="absolute top-16 -right-[52px] ">
                  <CommonButton title="Hire Top Developers" className="bg-[#9A00FF] text-white font-semibold py-3 px-6 rounded-[5px] w-[220px]" handleClick={() => console.log("")} />
                </div>
              </div>
              {/* <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 relative">
                Hire Top Developers
                <div className="absolute -inset-1 bg-purple-400 opacity-30 rounded-full animate-pulse"></div>
              </button> */}
            </div>
          </div>
          <div className="md:w-1/2 ">
            <img
              src={company7}
              alt="Team working together"
              className="w-full rounded-lg shadow-lg h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

