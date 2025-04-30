import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { images, routes } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhyRenderVerse = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Page styling="bg-[#111]">
      <section
        className={`flex flex-col md:flex-row ${
          isArabic ? "md:flex-row-reverse" : ""
        } items-center justify-center bg-[#111] py-8 md:py-12 px-4 md:px-0`}
      >
        {/* Left or Right Side - Image (depending on language) */}
        <div className="relative w-full md:w-[40%] flex justify-center">
          <img
            data-aos="zoom-in"
            data-aos-duration="700"
            src={images[t("whyRenderVerse.image") as keyof typeof images]}
            alt="Render Verse Visualization"
            className="max-w-full h-[50vh] md:h-[70vh] rounded-lg shadow-lg"
          />
        </div>

        {/* Content Block */}
        <div
          className={`w-full md:w-[60%] mt-8 md:mt-0 px-4 md:px-0 ${
            isArabic ? "text-right md:pr-10 md:pl-0" : "md:pl-10"
          }`}
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight mb-6 md:mb-10"
          >
            {t("whyRenderVerse.heading")}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="mt-4 text-xl md:text-3xl text-gray-300 font-semibold"
          >
            {t("whyRenderVerse.subheading")}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-base md:text-xl mt-4 md:mt-6"
          >
            {t("whyRenderVerse.description")}
          </p>

          <Button
            className="mt-6 bg-[#2176ff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7] text-sm md:text-base"
            onClick={() => {
              navigate(routes.caseStudy);
            }}
          >
            {t("whyRenderVerse.buttonText")}
          </Button>
        </div>
      </section>
    </Page>
  );
};

export default WhyRenderVerse;
