import Page from "@/components/shared/Page";
import { useTranslation } from "react-i18next"; // Import useTranslation

const CompanyAbout = () => {
  const { t } = useTranslation(); // Hook to get translation

  return (
    <Page styling="bg-[#111]">
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-200 leading-tight mb-6"
        >
          {t("company.aboutUs.title")} {/* Translated title */}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="mt-4 text-gray-300/90 text-center font-medium sm:font-semibold text-base sm:text-lg md:text-xl"
        >
          {t("company.aboutUs.description1")} {/* Translated paragraph 1 */}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="mt-6 text-gray-300/90 text-center font-medium sm:font-semibold text-base sm:text-lg md:text-xl"
        >
          {t("company.aboutUs.description2")} {/* Translated paragraph 2 */}
        </p>
      </section>
    </Page>
  );
};

export default CompanyAbout;
