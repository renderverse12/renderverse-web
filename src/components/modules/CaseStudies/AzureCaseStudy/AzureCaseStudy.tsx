import CallToAction from "@/components/shared/CallToAction";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { images } from "@/utils/constants";
import AzureHero from "./subcomponents/AzureHero";
import AzureOverview from "./subcomponents/AzureOverview";
import AzureGoals from "./subcomponents/AzureGoals";
import AzureProcess from "./subcomponents/AzureProcess";
import AzureConclusion from "./subcomponents/AzureConclusion";
import { useTranslation } from "react-i18next";

const AzureCaseStudy = () => {
  const { t } = useTranslation();

  return (
    <>
      <AzureHero />

      <h2 className="text-4xl sm:text-5xl md:text-6xl px-4 py-10 font-bold text-center text-gray-200 bg-[#111] leading-tight">
        {t("caseStudiesAzure.azure.name")}
      </h2>

      <AzureOverview />

      <ParallaxSection image={images.azureCaseStudy3} />

      <AzureGoals />
      <AzureProcess />
      <AzureConclusion />

      <CallToAction
        taglineKey={t("caseStudiesAzure.azure.callToAction.tagline")}
        taglineTwoKey={t("caseStudiesAzure.azure.callToAction.taglineTwo")}
      />
    </>
  );
};

export default AzureCaseStudy;
