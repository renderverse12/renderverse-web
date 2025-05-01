import CallToAction from "@/components/shared/CallToAction";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { images } from "@/utils/constants";
import MinervaHero from "./subcomponents/MinervaHero";
import MinervaOverview from "./subcomponents/MinervaOverview";
import MinervaGoals from "./subcomponents/MinervaGoals";
import MinervaProcess from "./subcomponents/MinervaProcess";
import MinervaConclsuion from "./subcomponents/MinervaConclsuion";
import { useTranslation } from "react-i18next";

const MinervaCaseStudy = () => {
  const { t } = useTranslation();

  return (
    <>
      <MinervaHero />

      <h2 className="text-4xl sm:text-5xl md:text-6xl py-10 font-bold text-center text-gray-200 bg-[#111] leading-tight px-4 sm:px-8 md:px-12">
        {t("caseStudiesMinerva.name")}
      </h2>

      <MinervaOverview />

      <ParallaxSection
        image={images.minervaCaseStudy7}
        height="h-[60vh] sm:h-[70vh] md:h-[80vh]"
      />

      <MinervaGoals />
      <MinervaProcess />

      <ParallaxSection
        image={images.minervaConclusion4}
        height="h-[60vh] sm:h-[70vh] md:h-[80vh]"
      />

      <MinervaConclsuion />

      <CallToAction
        taglineKey={t("caseStudiesMinerva.callToAction.tagline")}
        taglineTwoKey={t("caseStudiesMinerva.callToAction.taglineTwo")}
      />
    </>
  );
};

export default MinervaCaseStudy;
