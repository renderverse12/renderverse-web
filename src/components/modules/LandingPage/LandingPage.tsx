import Featured from "../Home/subcomponents/Featured";
import LandingPageHero from "./subcomponents/LandingPageHero";
import LandingPageTrusted from "./subcomponents/LandingPageTrusted";
import LandingPageWhy from "./subcomponents/LandingPageWhy";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";

const LandingPage = () => {
  return (
    <>
      <LandingPageHero />
      <LandingPageTrusted />
      <LandingPageWhy />
      <Featured />
      {/* <StunningWork /> */}
      <CallToAction
        tagline="Limited Spots Available!"
        taglineTwo="Book your free consultation now and start selling faster."
      />
      <FAQ />
    </>
  );
};

export default LandingPage;
