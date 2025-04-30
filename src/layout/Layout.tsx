import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { Button } from "@/components/ui/button";
import { images, routes } from "@/utils/constants";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
    localStorage.setItem("language", lng); // Save to localStorage
  };

  return (
    <div className="relative" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* رأس الصفحة / التنقل */}
      <div className="w-full bg-black h-12 md:h-16 flex flex-row justify-center sticky top-0 z-50">
        {/* الشعار */}
        <div
          className="w-16 md:w-24 absolute -bottom-4 md:-bottom-6 left-4 md:left-20 cursor-pointer"
          onClick={() => navigate(routes.home)}
        >
          <img
            src={images.RenderVerseLogo}
            alt="شعار رندر فيرس"
            className="w-full h-auto"
          />
        </div>

        {/* شريط التنقل لسطح المكتب */}
        <div className="hidden md:block absolute left-[38%] bottom-1 md:bottom-2">
          <Navbar />
        </div>

        {/* زر اتصل بنا لسطح المكتب */}
        <div className="hidden md:flex absolute right-10 bottom-2 items-center gap-4">
          <Button
            className="bg-[#2176ff] text-white py-2 px-5 rounded-md font-semibold hover:bg-[#1a5bb7] h-8"
            onClick={() => navigate(routes.contactUs)}
          >
            {t("contactUs")}
          </Button>
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
            className="text-white text-sm underline"
          >
            {i18n.language == "en" ? "عربي" : "EN"}
          </button>
        </div>

        {/* زر الهامبرغر للجوال */}
        <div className="md:hidden absolute right-4 bottom-2 flex items-center gap-3">
          <Button
            className="bg-[#2176ff] text-white py-1 px-3 rounded-md font-semibold hover:bg-[#1a5bb7] h-8 text-sm"
            onClick={() => navigate(routes.contactUs)}
          >
            {t("contactUs")}
          </Button>
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
            className="text-white text-sm underline"
          >
            {i18n.language === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 pt-16">
          <div className="flex flex-col items-center space-y-6 p-6">
            <Navbar mobile onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* المحتوى الأساسي */}
      <Outlet />

      {/* قسم البارالاكس */}
      <ParallaxSection
        image={images.commercial8}
        height="h-[40vh] md:h-[60vh]"
      />

      {/* التذييل */}
      <Footer />
    </div>
  );
};

export default Layout;
