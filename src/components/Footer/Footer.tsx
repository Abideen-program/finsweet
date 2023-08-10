import {
  FaFacebook,
  FaTwitch,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="flex flex-col p-5 md:p-10 gap-3 bg-[#1D2130]">
      <div className=" flex flex-col md:flex-row items-start justify-between  text-white">
        <div className="flex flex-col gap-3 flex-1">
          <h5 className="text-xs font-bold">Company</h5>
          <p className="text-[10px] font-thin">About Us</p>
          <p className="text-[10px] font-thin">Why Choose Us</p>
          <p className="text-[10px] font-thin">Pricing</p>
          <p className="text-[10px] font-thin">Testimonial</p>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <h5 className="text-xs font-bold">Resources</h5>
          <p className="text-[10px] font-thin">Privacy Policy</p>
          <p className="text-[10px] font-thin">Terms & Conditions</p>
          <p className="text-[10px] font-thin">Blog</p>
          <p className="text-[10px] font-thin">Contact Us</p>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <h5 className="text-xs font-bold">Product</h5>
          <p className="text-[10px] font-thin">Project management</p>
          <p className="text-[10px] font-thin">Time tracker</p>
          <p className="text-[10px] font-thin">Time schedule</p>
          <p className="text-[10px] font-thin">Testimonial</p>
          <p className="text-[10px] font-thin">Lead generate</p>
          <p className="text-[10px] font-thin">Remote collaboration</p>
        </div>

        <div className="flex flex-col gap-5 flex-1 w-full">
          <div className="w-[70px]">
            <img
              src="./images/footerlogo.png"
              alt="logo"
              className="object-contain"
            />
          </div>

          <h5 className="text-xs font-bold">Subscribe to our Newsletter</h5>

          <div className="bg-[#2A2D3B] flex relative rounded-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 outline-none border-none text-xs text-fff bg-[#2A2D3B] rounded-md"
            />
            <Button className="absolute bottom-1 right-1 text-[#1D2130] bg-[#fff]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t bordet-t-[#8E9097] px-10 mt-3 py-5 relative">
        <div className="flex md:flex-row flex-col items-center justify-center gap-4 md:absolute md:-top-2  bg-[#1D2130] px-3">
          <p className="text-xs text-[#8E9097]">
            &copy; Copyright Finsweet 2022
          </p>

          <div className="flex items-center justify-center gap-4">
            <FaFacebook className="text-[#8E9097]" />
            <FaTwitter className="text-[#8E9097]" />
            <FaInstagram className="text-[#8E9097]" />
            <FaLinkedin className="text-[#8E9097]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
