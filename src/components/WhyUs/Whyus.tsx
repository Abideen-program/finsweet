import Arrow from "../../../public/images/arrow.png";

const Whyus = () => {
  return (
    <div className="p-5 md:p-10 border border-red-500 my-3 flex flex-col items-center justify-between">
      <div className="mx-auto flex items-center w-[800px] justify-between">
        <div className="flex flex-col gap-3 w-[48%]">
          <p className="text-[#3860FD] text-xs font-semibold">
            Why should you work with us?
          </p>
          <h4 className="text-[30px] font-bold">
            To upscale your business to the next level
          </h4>
          <p className="text-[9px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="flex flex-col p-3 gap-3 w-[48%] items-start justify-start">
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
