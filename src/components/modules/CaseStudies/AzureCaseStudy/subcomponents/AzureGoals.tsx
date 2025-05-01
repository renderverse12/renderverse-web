import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const AzureGoals = () => {
  const { t } = useTranslation();
  // pull in the array of goal statements
  const goals = t("caseStudiesAzure.goals.items", {
    returnObjects: true,
  }) as string[];

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-10 px-4 sm:px-6 md:px-10 space-y-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl font-bold text-gray-200 text-center leading-tight"
        >
          {t("caseStudiesAzure.goals.title")}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="space-y-6 max-w-xl">
            {goals.map((goal, idx) => (
              <p
                key={idx}
                data-aos="fade-up"
                data-aos-duration={1000 + idx * 100}
                className="text-gray-300/90 font-semibold text-lg sm:text-xl"
              >
                <span className="text-[#2176ff] mr-2">•</span>
                {goal}
              </p>
            ))}
          </div>
          <img
            src={images.azureGoals2}
            alt={t("caseStudiesAzure.goals.altMain")}
            className="w-full max-w-sm md:h-80 object-cover"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[1, 3, 4].map((i, idx) => (
            <img
              key={i}
              src={(images as any)[`azureGoals${i}`]}
              alt={t(`caseStudiesAzure.goals.alt${i}`)}
              className="w-full sm:w-64 md:h-96 object-cover"
              data-aos="fade-right"
              data-aos-offset={200 + idx * 100}
              data-aos-duration={450 + idx * 350}
              data-aos-easing="ease-in-sine"
            />
          ))}
        </div>
      </section>
    </Page>
  );
};

export default AzureGoals;
