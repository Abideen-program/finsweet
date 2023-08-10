import Customer from "../Customer/Customer";
import Discover from "../Discover/Discover";
import Features from "../Features/Features";
import FeaturesTwo from "../Featurestwo/FeaturesTwo";
import Hero from "../Hero/Hero";
import Impression from "../Impression/Impression";
import Logo from "../Logo/Logo";
import Whyus from "../WhyUs/Whyus";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Whyus />
      <Impression />
      <Logo />
      <Discover />
      <FeaturesTwo />
      <Customer />
    </>
  );
};

export default Home;
