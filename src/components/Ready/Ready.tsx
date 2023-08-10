import Button from "../Button/Button";

const Ready = () => {
  return (
    <div className="p-5 md:px-10 md:py-6 flex flex-col relative overflow-y-hidden">
      <img
        src="./images/footerbg.png"
        alt="background"
        className="absolute bottom-0 left-0 object-cover w-full -z-10"
      />
      <div className="flex flex-col items-center justify-center gap-3 md:w-[400px] mx-auto text-center ">
        <h3 className="text-[20px] md:text-[30px] font-bold leading-9">
          The stunning results our customers have experienced
        </h3>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
        <Button className="text-white bg-[#1D2130]">View Pricing</Button>
      </div>
    </div>
  );
};

export default Ready;
