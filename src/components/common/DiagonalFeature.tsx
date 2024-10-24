const DiagonalFeatureSection = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  imageSrc = "https://s3-alpha-sig.figma.com/img/ec03/02bf/7afeaa73f91b17dc7103499bdb12f005?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToY1RBKqDYSwPpMEuJ5FSI0NSY19oDKCKDjfobxTJ6AKYE5VlcfOq4m6~AdqqnNwE19O8TGH7Nnqn8GTSFKvdeCUFBevKlB2JyfM~jl9SUuluGVfK9Hfv1Y4FU8foSaP9~T6BARx0j07JwAIcDbmi~S-0uvCgK0CsQ1JG8~ifJzhJb9wcfO8FsjEbtHfX9Z9ieifaOwCgO1HfnKj7eD7mK6MT6k90DAelqzO2TXEKqV39jaahzTPbvtKn8NpoH00VQilBWhSR6ZueueRbEiXBhQBMHrklexzxXD5SwMsXDFlmwiBzpO25XtTKVWnLw-Uj96pxNtS-vTli4lAQ3VhCA__",
}) => {
  return (
    <div className="w-full py-20 max-w-6xl mx-auto p-4 bg-white rounded-lg overflow-hidden shadow-lg mb-10">
      <div className="relative mb-32">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div
              className="absolute -bottom-10  right-24 w-[413px] h-[482px] bg-[#9A00FF]
                           "
            />

            <div className="relative  z-10 w-full overflow-hidden">
              <img
                src={imageSrc}
                alt="Feature illustration"
                className="w-[413px]  h-[482px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-12 mt-10">
            <h2 className="text-[40px] md:text-3xl font-semibold mb-4 text-[#000000]">
              {heading}
            </h2>
            <p className="font-inter font-normal text-[#000000] text-lg">{description}</p>
          </div>
        </div>
      </div>

      <div className="relative mb-32">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 lg:p-12 mt-10">
            <h2 className="text-[40px] md:text-3xl font-semibold mb-4 text-[#000000]">
              {heading}
            </h2>
            <p className="font-inter font-normal text-[#000000] text-lg">{description}</p>
          </div>

          <div className="relative w-full md:w-1/2">
            <div
              className="absolute -bottom-10  right-24 w-[413px] h-[482px] bg-[#9A00FF]
                           "
            />

            <div className="relative  z-10 w-full overflow-hidden">
              <img
                src={imageSrc}
                alt="Feature illustration"
                className="w-[413px]  h-[482px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div
              className="absolute -bottom-10  right-24 w-[413px] h-[482px] bg-[#9A00FF]
                           "
            />

            <div className="relative  z-10 w-full overflow-hidden">
              <img
                src={imageSrc}
                alt="Feature illustration"
                className="w-[413px]  h-[482px] object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-12 mt-10">
            <h2 className="text-[40px] md:text-3xl font-semibold mb-4 text-[#000000]">
              {heading}
            </h2>
            <p className="font-inter font-normal text-[#000000] text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagonalFeatureSection;
