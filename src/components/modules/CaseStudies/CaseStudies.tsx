import { images, routes } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Page from "@/components/shared/Page";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="hero-section relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        <h2 className="absolute bottom-6 left-4 sm:left-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wider">
          {t("caseStudiesPage.heroTitle")}
        </h2>
      </section>

      {/* Azure II */}
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-12 sm:py-16 px-4 sm:px-6 md:px-0">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.azureCaseStudy3}
              alt={t("caseStudiesPage.azure.alt")}
              className="w-full max-w-md sm:max-w-lg md:max-w-none h-auto sm:h-[50vh] md:h-[70vh] rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight mb-4 sm:mb-6"
            >
              {t("caseStudiesPage.azure.title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-2 text-gray-300/90 font-medium text-base sm:text-lg md:text-xl"
            >
              {t("caseStudiesPage.azure.description")}
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1a5bb7] text-sm sm:text-base"
              onClick={() => navigate(routes.azure)}
            >
              {t("caseStudiesPage.viewButton")}
            </Button>
          </div>
        </section>
      </Page>

      <Separator />

      {/* Minerva House */}
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-12 sm:py-16 px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-5/12 flex justify-center order-1 md:order-2 mt-6 md:mt-0 md:pl-8">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.minervaCaseStudy2}
              alt={t("caseStudiesPage.minerva.alt")}
              className="w-full max-w-md sm:max-w-lg md:max-w-none h-auto sm:h-[50vh] md:h-[70vh] rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-7/12 order-2 md:order-1 text-center md:text-left mt-6 md:mt-0">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight mb-4 sm:mb-6"
            >
              {t("caseStudiesPage.minerva.title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-2 text-gray-300/90 font-medium text-base sm:text-lg md:text-xl"
            >
              {t("caseStudiesPage.minerva.description")}
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1a5bb7] text-sm sm:text-base"
              onClick={() => navigate(routes.minerva)}
            >
              {t("caseStudiesPage.viewButton")}
            </Button>
          </div>
        </section>
      </Page>

      <Separator />

      {/* 1920 Pierce */}
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-12 sm:py-16 px-4 sm:px-6 md:px-0">
          <div className="w-full md:w-7/12 flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.pierceConclusion7}
              alt={t("caseStudiesPage.pierce.alt")}
              className="w-full max-w-md sm:max-w-lg md:max-w-none h-auto sm:h-[50vh] md:h-[70vh] rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-7/12 text-center md:text-left mt-6 md:mt-0 md:pl-8">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight mb-4 sm:mb-6"
            >
              {t("caseStudiesPage.pierce.title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-2 text-gray-300/90 font-medium text-base sm:text-lg md:text-xl"
            >
              {t("caseStudiesPage.pierce.description")}
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#1a5bb7] text-sm sm:text-base"
              onClick={() => navigate(routes.pierce)}
            >
              {t("caseStudiesPage.viewButton")}
            </Button>
          </div>
        </section>
      </Page>
    </>
  );
};

export default CaseStudies;
