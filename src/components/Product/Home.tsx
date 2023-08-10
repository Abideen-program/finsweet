import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Product = () => {
  return (
    <div className="p-5 md:p-10 border border-red-600">
      <div className="flex flex-col relative overflow-y-hidden pb-5">
        <img
          src="./images/herobg.png"
          alt="background"
          className="absolute -z-10 top-4"
        />
        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-2 py-6">
          <div className="md:w-[60%] lg:w-[45%] flex flex-col justify-center items-center md:items-start md:justify-center">
            <h1 className="text-[20px] md:text-[25px] lg:text-[40px] font-semibold lg:leading-[50px]">
              Grow your Sales and Services
            </h1>

            <p className="text-xs my-4 text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-2">
              <Button className="text-white bg-[#1D2130]">Get Started</Button>
              <Button className="bg-white text-[#1D2130] border border-[#8E9097]">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="px-3 md:w-[70%] lg:w-[40%]">
            <img
              src="./images/heroimage.png"
              alt="dashboard"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="md:mt-4">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Product;
