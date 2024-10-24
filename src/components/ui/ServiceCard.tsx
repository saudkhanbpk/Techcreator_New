// import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  currentIndex?: number
  style: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  // currentIndex,
  style
}) => {
  return (
    <div
      className={`
        ${style ? "bg-[white] rounded-[20px] w-[350px] p-8 flex justify-center items-center mx-auto" : "bg-[white] rounded-lg p-6 flex justify-center items-center mx-auto"}
        `}
      style={{
        boxShadow: `${style ? "3px 4px 5px 0px #00000040" : "0px 4px 30px 0px #0000000D"}`,
      }}
    >
      <div>
        <div className="mb-4 flex justify-center items-center p-3 w-[58px] h-[58px] bg-purple-100 rounded-full   ">
          <img src={Icon} alt="image" className="w-[34px] h-[34px]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#2D3748]">{title}</h3>
          <p className={`${style ? "font-inter font-normal text-[20px] text-justify leading-[31.4px] text-[#000000]" : "text-gray-600"} `}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
