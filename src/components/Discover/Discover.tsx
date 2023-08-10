
const Discover = () => {
  return (
    <div className="border border-red-700 p-5 md:p-10 my-3 flex flex-col items-center justify-between">
      <div className="mx-auto flex flex-col md:flex-row items-center lg:w-[800px] justify-between gap-3">
        <div className="flex flex-col gap-3 md:w-1/2 lg:w-[48%]">
          <p className="text-[#3860FD] text-xs font-semibold text-center md:text-start">
            Discover More
          </p>
          <h4 className="text-[20px] lg:text-[30px] font-bold text-center md:text-start">
            Analyze your sales and marketing leads
          </h4>
          <p className="text-[10px] md:text-[9px] text-center md:text-start">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="flex flex-col md:p-3 gap-3 md:w-1/2 lg:w-[48%] items-start justify-start">
          <div className="flex items-center justify-center gap-3">
            <div className="w-[40px]">
              <img
                src="./images/chart.png"
                alt="icon"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h4 className="text-xs font-semibold">Sales Tracking</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-[40px]">
              <img
                src="./images/user.png"
                alt="icon"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h4 className="text-xs font-semibold">Project Management</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-[40px]">
              <img
                src="./images/report.png"
                alt="icon"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h4 className="text-xs font-semibold">Activity Report</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
