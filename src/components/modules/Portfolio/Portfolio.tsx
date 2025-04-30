import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PortfolioAll from "./subcomponents/PortfolioAll";
import PortfolioInterior from "./subcomponents/PortfolioInterior";
import PortfolioExterior from "./subcomponents/PortfolioExterior";
import PortfolioCommercial from "./subcomponents/PortfolioCommercial";
import Portfolio3DFloor from "./subcomponents/Portfolio3DFloor";
import PortfolioHero from "./subcomponents/PortfolioHero";
import PortfolioVirtualTour from "./subcomponents/PortfolioVirtualTour";
import PortfolioAnimation from "./subcomponents/PortfolioAnimation";

const Portfolio = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("tab") || "all";

  const tabs = [
    {
      value: "all",
      label: t("portfolioPage.tabs.all"),
      content: <PortfolioAll />,
    },
    {
      value: "interior",
      label: t("portfolioPage.tabs.interior"),
      content: <PortfolioInterior />,
    },
    {
      value: "exterior",
      label: t("portfolioPage.tabs.exterior"),
      content: <PortfolioExterior />,
    },
    {
      value: "commercial",
      label: t("portfolioPage.tabs.commercial"),
      content: <PortfolioCommercial />,
    },
    {
      value: "3d-floor-plan",
      label: t("portfolioPage.tabs.3dFloorPlan"),
      content: <Portfolio3DFloor />,
    },
    {
      value: "virtualTour",
      label: t("portfolioPage.tabs.virtualTour"),
      content: <PortfolioVirtualTour />,
    },
    {
      value: "animations",
      label: t("portfolioPage.tabs.animations"),
      content: <PortfolioAnimation />,
    },
  ];

  return (
    <>
      <PortfolioHero />

      <Tabs defaultValue={activeTab} className="bg-[#111] w-full">
        <div className="overflow-x-auto w-full py-6 bg-[#111] flex justify-start md:justify-center">
          <TabsList className="flex space-x-6 w-max">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="min-w-max flex-shrink-0 px-4"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default Portfolio;
