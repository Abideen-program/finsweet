const Hero = () => {
  return (
    <div className="flex flex-col py-10">
      <div className="mx-auto w-full lg:w-[1024px] text-center flex items-center justify-center flex-col relative overflow-y-hidden">
        <img
          src="./images/herobg.png"
          alt="background"
          className="absolute -z-10 top-4"
        />
        <div className="md:w-[60%] lg:w-[50%]">
          <h1 className="text-[20px] md:text-[25px] lg:text-[40px] font-semibold lg:leading-[50px]">
            The Best Software to Grow your Sales and Services
          </h1>

          <p className="text-xs my-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>

          <div className="border mb-2 bg-white w-[80%] lg:w-[70%] mx-auto flex relative rounded-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 outline-none border-none text-xs"
            />
            <button className="absolute bottom-1 right-1 text-xs text-white font-semibold py-2 px-4 cursor-pointer rounded-lg bg-[#1D2130]">
              Get Free Trial
            </button>
          </div>
        </div>

        <div className="px-3 md:w-[70%] lg:w-[60%]">
          <img
            src="./images/heroimage.png"
            alt="dashboard"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
