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
      <ParallaxSection image={images.commercial8} height="h-[55vh]">
        <TrustedPartners />
      </ParallaxSection>
      <Testimonials />
      <CallToAction taglineKey="taglineKey" taglineTwoKey="taglineTwoKey" />
      <FAQ />
    </>
  );
};

export default Home;
