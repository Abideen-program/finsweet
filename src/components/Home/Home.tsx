import Customer from "../Customer/Customer";
import Discover from "../Discover/Discover";
import Features from "../Features/Features";
import FeaturesTwo from "../Featurestwo/FeaturesTwo";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Impression from "../Impression/Impression";
import Logo from "../Logo/Logo";
import Ready from "../Ready/Ready";
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
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
