import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioAll from "./subcomponents/PortfolioAll";
import PortfolioInterior from "./subcomponents/PortfolioInterior";
import PortfolioExterior from "./subcomponents/PortfolioExterior";
import PortfolioCommercial from "./subcomponents/PortfolioCommercial";
import Portfolio3DFloor from "./subcomponents/Portfolio3DFloor";
import PortfolioHero from "./subcomponents/PortfolioHero";
import PortfolioVirtualTour from "./subcomponents/PortfolioVirtualTour";
import PortfolioAnimation from "./subcomponents/PortfolioAnimation";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("tab") || "all";
  return (
    <>
      <PortfolioHero />
      <Tabs defaultValue={activeTab} className=" bg-[#111]">
        <TabsList className="flex justify-center bg-[#111] pt-8 pb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="interior">Interior</TabsTrigger>
          <TabsTrigger value="exterior">Exterior</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="3d-floor-plan">3D Floor Plan</TabsTrigger>
          <TabsTrigger value="virtualTour">Virtual Tour</TabsTrigger>
          <TabsTrigger value="animations">Walk Through Animations</TabsTrigger>
        </TabsList>
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
