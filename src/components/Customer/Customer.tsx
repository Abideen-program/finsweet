import Item from "./Item";
import Customerone from "../../../public/images/customer1.png";
import Customertwo from "../../../public/images/customer2.png";
import Customerthree from "../../../public/images/customer3.png";

const Customer = () => {
  return (
    <div className="p-5 md:px-10 md:py-6 md:mb-3 flex flex-col">
      <div className="flex flex-col items-center justify-center md:w-[400px] mx-auto text-center">
        <h3 className="text-[20px] md:text-[30px] font-bold leading-9">
          The stunning results our customers have experienced
        </h3>
      </div>

      <div className="p-5 md:px-10 rounded-lg flex md:flex-row flex-col items-center justify-between gap-3">
        <Item image={Customerone} name={"Ron Wood"} position={"CEO"} />
        <Item
          image={Customertwo}
          name={"Mark Mason"}
          position={"Marketing Manager"}
        />
        <Item image={Customerthree} name={"Sam Preston"} position={"CTO"} />
      </div>
    </div>
  );
};

export default Customer;
