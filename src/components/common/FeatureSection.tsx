
const FeatureSection = ({
  heading = "Heading",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that it has more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and",
  image = "https://s3-alpha-sig.figma.com/img/a448/764d/f2ca1dea58d19b59bd54c4996148d987?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxCgInOztG0SZYUJgjYOrxP7PMdCLyMuaX8DtUJ4xyrOtY3ajRt4XeWV4nfYvWo~j~fkI-Kez7Hr-tO-47DPJx3f~h6rHPt-F0ZWaZqHbahYuPsA0SYvabEN21Wuap2JtU3~6Hi-ZfkZm4FKXRsP2DICUP0jbyJ41agqocPpO13qvFi5KUzSVQhC7hbpRJ62X4xHeegdMMImrrsh9h8faQcZwon9w3UV5RXGcASMETcvmeXEONB85H76aDYezg0AUajeGx6YgoMeUzZJDNe~KYIGzb6tW7UvJaI6um1181jscqhevbeTmt14DUivhuDp5GKth-4TpSVt7C9NvKuQjQ__"
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 relative">
      <div className="flex">
        <div className="absolute -bottom-10 z-10">
          <img src={image} alt="image" className="w-[400px]  h-[400px]" />
        </div>
        <div className="bg-[#9A00FF] relative left-[150px] h-[400px] w-[800px]">
          <div className="w-[400px] mx-auto mt-20 mr-20">
            <div>
              <h2 className="font-inter font-bold text-[45.25px] leading-[70.4px] text-[#FFFFFF]">{heading}</h2>
            </div>
            <div>
              <p className="font-inter font-medium text-[16px]  text-[#FFFFFF]">

                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;