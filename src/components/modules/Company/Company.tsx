import CompanyAbout from "./subcomponents/CompanyAbout";
import CompanyCollaboration from "./subcomponents/CompanyCollaboration";
import CompanyHero from "./subcomponents/CompanyHero";
import Team from "./subcomponents/Team";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { images } from "@/utils/constants";
import CompanyMission from "./subcomponents/CompanyMission";

const Company = () => {
  return (
    <>
      <CompanyHero />

      <CompanyAbout />
      <ParallaxSection image={images.exterior6} height="h-[60vh]" />

      <CompanyCollaboration />
      <CompanyMission />
      <Team />
    </>
  );
};

export default Company;
