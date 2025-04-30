import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { Button } from "@/components/ui/button";
import { images, routes } from "@/utils/constants";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // Import hamburger and close icons

const Layout = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header/Navigation */}
      <div className="w-full bg-black h-12 md:h-16 flex flex-row justify-center sticky top-0 z-50">
        {/* Logo */}
        <div
          className="w-16 md:w-24 absolute -bottom-4 md:-bottom-6 left-4 md:left-20 cursor-pointer"
          onClick={() => navigate(routes.home)}
        >
          <img
            src={images.RenderVerseLogo}
            alt="Render Verse Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block absolute left-[38%] bottom-1 md:bottom-2">
          <Navbar />
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block absolute left-[90%] bottom-2">
          <Button
            className="bg-[#2176ff] text-white w-full py-2 px-5 rounded-md font-semibold hover:bg-[#1a5bb7] h-8"
            onClick={() => navigate(routes.contactUs)}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden absolute right-4 bottom-2 flex items-center gap-4">
          <Button
            className="bg-[#2176ff] text-white py-1 px-3 rounded-md font-semibold hover:bg-[#1a5bb7] h-8 text-sm"
            onClick={() => navigate(routes.contactUs)}
          >
            Contact
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 pt-16">
          <div className="flex flex-col items-center space-y-6 p-6">
            <Navbar mobile onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      <Outlet />

      <ParallaxSection
        image={images.commercial8}
        height="h-[40vh] md:h-[60vh]"
      />

      <Footer />
    </div>
  );
};

export default Layout;
