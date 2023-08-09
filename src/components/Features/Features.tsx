import Item from "./Item";
import Badge from "../../../public/images/badge.png";
import Thumb from "../../../public/images/thumb.png";
import Headset from "../../../public/images/headset.png";

const Features = () => {
  return (
    <div className="p-5 md:p-10 md:my-3 flex flex-col">
      <div className="flex flex-col items-center justify-center md:w-[370px] mx-auto text-center">
        <p className="text-xs text-[#3860FD]">High-quality</p>
        <h3 className="my-3 text-[20px] md:text-[30px] font-bold">
          We have the Best Solution for your Business
        </h3>
      </div>

      <div className="bg-[#EFF1FD] p-5 md:p-10 rounded-lg flex md:flex-row flex-col items-center justify-between gap-3">
        <Item image={Badge} h4={"High security to protect from piracy"} />
        <Item image={Thumb} h4={"Premium quality performance"} />
        <Item image={Headset} h4={"Full time customer support - 24/7"} />
      </div>
    </div>
  );
};

export default Features;
