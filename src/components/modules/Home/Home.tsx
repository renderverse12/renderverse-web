import ParallaxSection from "@/components/shared/ParallaxSection";
import Featured from "./subcomponents/Featured";
import Hero from "./subcomponents/Hero";
import WhyRenderVerse from "./subcomponents/WhyRenderVerse";
import Testimonials from "./subcomponents/Testimonials";
import { images } from "@/utils/constants";
import TrustedPartners from "./subcomponents/TrustedPartners";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import IconsText from "@/components/shared/IconsText";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <WhyRenderVerse />
      <IconsText />
      <ParallaxSection image={images.commercial8} height="h-[40vh]">
        <TrustedPartners />
      </ParallaxSection>
      <Testimonials />
      <CallToAction
        tagline="Limited Spots Available!"
        taglineTwo="Book your free consultation now and start selling faster."
      />
      <FAQ />
    </>
  );
};

export default Home;
