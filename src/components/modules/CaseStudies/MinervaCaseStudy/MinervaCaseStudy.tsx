import CallToAction from "@/components/shared/CallToAction";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { images } from "@/utils/constants";
import MinervaHero from "./subcomponents/MinervaHero";
import MinervaOverview from "./subcomponents/MinervaOverview";
import MinervaGoals from "./subcomponents/MinervaGoals";
import MinervaProcess from "./subcomponents/MinervaProcess";
import MinervaConclsuion from "./subcomponents/MinervaConclsuion";

const MinervaCaseStudy = () => {
  return (
    <>
      <MinervaHero />
      <h2 className="text-6xl py-10 font-bold text-center text-gray-200 bg-[#111] leading-tight ">
        Minerva House
      </h2>
      <MinervaOverview />
      <ParallaxSection image={images.minervaCaseStudy7} height="h-[60vh]" />
      <MinervaGoals />
      <MinervaProcess />
      <ParallaxSection image={images.minervaConclusion4} height="h-[60vh]" />
      <MinervaConclsuion />

      <CallToAction
        tagline="Looking to elevate your real estate project with premium 3D visualization?"
        taglineTwo="Contact Render Verse today!"
      />
    </>
  );
};

export default MinervaCaseStudy;
