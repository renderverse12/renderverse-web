import { useLocation } from "react-router-dom";
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
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("tab") || "all";

  return (
    <>
      <PortfolioHero />

      <Tabs defaultValue={activeTab} className="bg-[#111] w-full">
        {/* Overflow scroll on mobile, centered on md+ */}
        <div className="overflow-x-auto w-full py-6 bg-[#111] flex justify-start md:justify-center">
          <TabsList className="flex space-x-6 w-max">
            <TabsTrigger value="all" className="min-w-max flex-shrink-0 px-4">
              All
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              className="min-w-max flex-shrink-0 px-4"
            >
              Interior
            </TabsTrigger>
            <TabsTrigger
              value="exterior"
              className="min-w-max flex-shrink-0 px-4"
            >
              Exterior
            </TabsTrigger>
            <TabsTrigger
              value="commercial"
              className="min-w-max flex-shrink-0 px-4"
            >
              Commercial
            </TabsTrigger>
            <TabsTrigger
              value="3d-floor-plan"
              className="min-w-max flex-shrink-0 px-4"
            >
              3D Floor Plan
            </TabsTrigger>
            <TabsTrigger
              value="virtualTour"
              className="min-w-max flex-shrink-0 px-4"
            >
              Virtual Tour
            </TabsTrigger>
            <TabsTrigger
              value="animations"
              className="min-w-max flex-shrink-0 px-4"
            >
              Walk Through Animations
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Panels */}
        <TabsContent value="all">
          <PortfolioAll />
        </TabsContent>
        <TabsContent value="interior">
          <PortfolioInterior />
        </TabsContent>
        <TabsContent value="exterior">
          <PortfolioExterior />
        </TabsContent>
        <TabsContent value="commercial">
          <PortfolioCommercial />
        </TabsContent>
        <TabsContent value="3d-floor-plan">
          <Portfolio3DFloor />
        </TabsContent>
        <TabsContent value="virtualTour">
          <PortfolioVirtualTour />
        </TabsContent>
        <TabsContent value="animations">
          <PortfolioAnimation />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Portfolio;
