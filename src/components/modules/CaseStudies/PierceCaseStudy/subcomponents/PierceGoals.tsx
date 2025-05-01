import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const PierceGoals = () => {
  const { t } = useTranslation();

  const goalImages = [
    images.pierceGoals2,
    images.pierceGoals3,
    images.pierceGoals5,
  ];

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-8 px-4 sm:px-6 md:px-0 space-y-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl font-bold text-gray-200 leading-tight py-2 text-center"
        >
          {t("caseStudiesPierce.goals.title")}
        </h2>

        {/* First Row: text + single image */}
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-y-8 md:gap-y-0 md:gap-x-32">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-base sm:text-xl md:text-xl leading-relaxed md:w-1/2 text-center md:text-left"
          >
            {t("caseStudiesPierce.goals.description")}
          </p>

          <img
            src={images.pierceGoals1}
            alt="Goal Visualization"
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="w-full max-w-md sm:max-w-lg md:max-w-none h-auto sm:h-80 md:h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Second Row: three images */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          {goalImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={t(`caseStudiesPierce.goals.imageAlts.${i}`)}
              data-aos="fade-right"
              data-aos-delay={i * 150}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className="w-full sm:w-1/3 max-w-xs h-auto sm:h-80 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>
    </Page>
  );
};

export default PierceGoals;
