import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const MinervaGoals = () => {
  const { t } = useTranslation();

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-8 space-y-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 leading-tight py-2 text-center"
        >
          {t("caseStudiesMinerva.goals.title")}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-gray-300/90 font-semibold text-lg sm:text-xl text-center space-y-8 px-4 sm:px-8"
        >
          {t("caseStudiesMinerva.goals.p1")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-5 sm:gap-y-0">
          <img
            src={images.minervaGoals1}
            className="h-[30rem] w-full sm:w-auto"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
            alt={t("caseStudiesMinerva.goals.imageAlt1")}
          />
          <img
            src={images.minervaGoals6}
            className="h-[30rem] w-full sm:w-auto"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            alt={t("caseStudiesMinerva.goals.imageAlt2")}
          />
        </div>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-gray-300/90 font-semibold text-lg sm:text-xl text-center space-y-8 px-4 sm:px-8"
        >
          {t("caseStudiesMinerva.goals.p2")}
        </p>
      </section>
    </Page>
  );
};

export default MinervaGoals;
