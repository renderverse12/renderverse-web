// import useCanvasCursor from "@/hooks/useCanvasCursor";
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { Button } from "@/components/ui/button";
import { images, routes } from "@/utils/constants";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full bg-black h-12 flex flex-row justify-center sticky top-0 z-50">
        <div
          className="w-24 absolute -bottom-6 left-20 cursor-pointer"
          onClick={() => navigate(routes.home)}
        >
          <img src={images.RenderVerseLogo} alt="Render Verse Logo" />
        </div>
        <div className="absolute left-[38%] bottom-1">
          <Navbar />
        </div>
        <div className="absolute left-[90%] bottom-2">
          <Button
            className="bg-[#2176ff] text-white w-full py-2 px-5 rounded-md font-semibold hover:bg-[#1a5bb7] h-8"
            onClick={() => {
              navigate(routes.contactUs);
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <Outlet />
      <ParallaxSection image={images.commercial8} height="h-[60vh]" />
      <Footer />
    </div>
  );
};

export default Layout;
