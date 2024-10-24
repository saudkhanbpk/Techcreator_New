import image from './../../assets/Rectangle 21855.png'
const FramedFeatureSection = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  imageSrc = image
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-[100%] bg-[#9A00FF] p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {heading}
            </h2>
            <p className="text-lg leading-relaxed w-[450px]">
              {description}
            </p>
          </div>
          <div className="w-full md:w-1/2 md:-ml-8 z-10">
            <div className="relative">
              <div className="relative -left-28 bg-gray-100">
                <img
                  src={imageSrc}
                  alt="Feature illustration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramedFeatureSection;