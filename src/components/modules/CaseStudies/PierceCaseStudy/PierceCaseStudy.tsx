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

      {/* Adjust parallax height for mobile */}
      <div className="hidden md:block">
        <ParallaxSection
          image={images.pierceProcess1}
          height="h-[60vh] md:h-[60vh]"
        />
      </div>
      <div className="md:hidden">
        {/* Optional: Replace with a static image or different component on mobile */}
        <ParallaxSection image={images.pierceProcess1} height="h-[40vh]" />
      </div>

      <PierceGoals />
      <PierceProcess />

      {/* Adjust conclusion parallax section */}
      <div className="hidden md:block">
        <ParallaxSection
          image={images.pierceConclusion2}
          height="h-[80vh] md:h-[80vh]"
        />
      </div>
      <div className="md:hidden">
        <ParallaxSection image={images.pierceConclusion2} height="h-[50vh]" />
      </div>

      <PierceConclusion />
    </>
  );
};

export default PierceCaseStudy;