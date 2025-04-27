import ParallaxSection from "@/components/shared/ParallaxSection";
import PierceConclusion from "./subcomponents/PierceConclusion";
import PierceGoals from "./subcomponents/PierceGoals";
import PierceHero from "./subcomponents/PierceHero";
import PierceOverview from "./subcomponents/PierceOverview";
import PierceProcess from "./subcomponents/PierceProcess";
import { images } from "@/utils/constants";

const PierceCaseStudy = () => {
  return (
    <>
      <PierceHero />
      <PierceOverview />
      <ParallaxSection image={images.pierceProcess1} height="h-[60vh]" />

      <PierceGoals />
      <PierceProcess />
      <ParallaxSection image={images.pierceConclusion2} height="h-[80vh]" />
      <PierceConclusion />
    </>
  );
};

export default PierceCaseStudy;
