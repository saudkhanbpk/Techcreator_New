// import React from "react";
import squareImage from "./../../assets/aboutImages/Group 143725868.png";
import group1 from "./../../assets/aboutImages/Mask group.png";
import group2 from "./../../assets/aboutImages/Mask group (1).png";
import group3 from "./../../assets/aboutImages/Mask group (2).png";

function AboutSection() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4 flex gap-12">
          <div className="flex flex-col lg:flex-row items-center w-[50%]">
            <div className="mr-2">
              <img src={group1} alt="image1" className="w-[324px] h-[333px]" />
            </div>
            <div>
              <div className="mb-1">
                <img src={group2} alt="image2" />
              </div>
              <div>
                <img src={group3} alt="image3" />
              </div>
            </div>
          </div>
          <div className=" w-[50%]">
            <div className="flex justify-center">
              <img
                src={squareImage}
                alt="about_image"
                className="w-[196.88px] h-[196.18px] rotate-[-9.96 deg]"
              />
            </div>
            <div>
              <h1 className="text-[#9A00FF] font-bold text-[35px] leading-[55px]">
                About Us
              </h1>
              <p className="text-[#3F3F3F] font-normal text-xl leading-[36px]">
                Concept Softworks is a software company, we develop custom built
                software for clients - covering everything from financial
                institutions & medical companies all the way to tech companies
                and government organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
