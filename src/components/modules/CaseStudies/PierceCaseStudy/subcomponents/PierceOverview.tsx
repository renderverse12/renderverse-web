import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const PierceOverview = () => {
  const { t } = useTranslation();

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-6 md:py-8 space-y-6 md:space-y-8 px-4 md:px-0">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 md:px-60"
        >
          {t("caseStudiesPierce.overview.title")}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-x-20 items-center justify-center px-4 md:px-0">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-base md:text-2xl w-full md:w-1/2 text-center md:text-left"
          >
            {t("caseStudiesPierce.overview.description")}
          </p>

          <img
            src={images.pierceHero3}
            className="w-full md:w-auto h-64 md:h-96 object-cover"
            data-aos="zoom-in"
            data-aos-duration="1500"
            alt={t("caseStudiesPierce.overview.imageAlt")}
          />
        </div>
      </section>
    </Page>
  );
};

export default PierceOverview;
