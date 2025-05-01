import Featured from "../Home/subcomponents/Featured";
import LandingPageHero from "./subcomponents/LandingPageHero";
import LandingPageTrusted from "./subcomponents/LandingPageTrusted";
import LandingPageWhy from "./subcomponents/LandingPageWhy";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <LandingPageHero />
      <LandingPageTrusted />
      <LandingPageWhy />
      <Featured />
      {/* <StunningWork /> */}
      <CallToAction
        taglineKey={t("landing.callToAction.taglineKey")}
        taglineTwoKey={t("landing.callToAction.taglineTwoKey")}
      />
      <FAQ />
    </>
  );
};

export default LandingPage;
