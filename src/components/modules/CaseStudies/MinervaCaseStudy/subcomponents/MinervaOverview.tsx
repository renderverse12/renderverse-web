import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const MinervaOverview = () => {
  const { t } = useTranslation();

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-8 space-y-8">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-6 md:px-16 lg:px-60"
        >
          {t("caseStudiesMinerva.overview.title")}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative w-full md:w-[40%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.minervaCaseStudy2}
              alt={t("caseStudiesMinerva.overview.alt")}
              className="max-w-full h-[70vh] rounded-md shadow-lg"
            />
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-xl sm:text-2xl md:w-1/2 text-center md:text-left"
          >
            {t("caseStudiesMinerva.overview.description")}
          </p>
        </div>
      </section>
    </Page>
  );
};

export default MinervaOverview;
