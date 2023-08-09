import Arrow from "../../../public/images/arrow.png";

const Whyus = () => {
  return (
    <div className="p-5 md:p-10 my-3 flex flex-col items-center justify-between">
      <div className="mx-auto flex flex-col md:flex-row items-center lg:w-[800px] justify-between gap-3">
        <div className="flex flex-col gap-3 md:w-1/2 lg:w-[48%]">
          <p className="text-[#3860FD] text-xs font-semibold text-center md:text-start">
            Why should you work with us?
          </p>
          <h4 className="text-[20px] lg:text-[30px] font-bold text-center md:text-start">
            To upscale your business to the next level
          </h4>
          <p className="text-[10px] md:text-[9px] text-center md:text-start">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="flex flex-col md:p-3 gap-3 md:w-1/2 lg:w-[48%] items-start justify-start">
          <div className="flex items-center justify-center gap-3">
            <div className="w-[30px]">
              <img src={Arrow} alt="icon" />
            </div>
            <p className="text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-[30px]">
              <img src={Arrow} alt="icon" />
            </div>
            <p className="text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-[30px]">
              <img src={Arrow} alt="icon" />
            </div>
            <p className="text-xs font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
