import Button from "../Button/Button";

const Impression = () => {
  return (
    <div className="p-5 md:p-10 border border-red-500 my-3 flex flex-col items-center justify-between relative overflow-y-hidden">
      <img
        src="./images/impressionbg.png"
        alt="background"
        className="absolute top-0 right-0 bottom-0 object-cover -z-10 h-full w-full"
      />
      <div className="mx-auto flex flex-col md:flex-row items-center lg:w-[800px] justify-between gap-3">
        <div className="flex flex-col gap-3 md:w-1/2 lg:w-[48%]">
          <h4 className="text-[20px] lg:text-[30px] font-bold text-center md:text-start">
            More impressions, more conversions
          </h4>
          <p className="text-[10px] md:text-[9px] text-center md:text-start">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>

          <Button className="text-white bg-[#1D2130] self-center md:self-start">
            Get Free Trial
          </Button>
        </div>

        <div className="md:p-3 gap-3 md:w-1/2 lg:w-[48%]">
          <img src="./images/impression.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Impression;
