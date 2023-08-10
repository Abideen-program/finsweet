import Item from "./Item";
import Message from "../../../public/images/message.png";
import Bot from "../../../public/images/bot.png";
import Shutter from "../../../public/images/shutter.png";

const FeaturesTwo = () => {
  return (
    <div className="p-5 md:px-10 md:py-6 flex flex-col">
      <div className="flex flex-col items-center justify-center md:w-[370px] mx-auto text-center">
        <h3 className="my-3 text-[20px] md:text-[30px] font-bold">Features</h3>
      </div>

      <div className="bg-[#F9F0FB] p-5 md:p-10 rounded-lg flex md:flex-row flex-col items-center justify-between gap-3">
        <Item image={Shutter} h4={"Advanced 256-bit encryption"} />
        <Item image={Message} h4={"Simple collaboration tools"} />
        <Item image={Bot} h4={"Customizable AI features"} />
      </div>
    </div>
  );
};

export default FeaturesTwo;
