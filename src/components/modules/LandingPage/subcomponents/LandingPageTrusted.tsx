import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const LandingPageTrusted = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 text-center bg-[#111] px-4">
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 leading-tight my-6"
      >
        {t("landing.trusted.title")}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-6">
        <img
          src={images.trustedPartnersWhite1}
          alt={t("landing.trusted.clients.client1")}
          className="h-10 sm:h-14"
        />
        <img
          src={images.trustedPartnersWhite2}
          alt={t("landing.trusted.clients.client2")}
          className="h-16 sm:h-28"
        />
        <img
          src={images.trustedPartnersWhite3}
          alt={t("landing.trusted.clients.client3")}
          className="h-8 sm:h-10"
        />
        <img
          src={images.trustedPartnersWhite4}
          alt={t("landing.trusted.clients.client4")}
          className="h-12 sm:h-16"
        />
        <img
          src={images.trustedPartnersWhite5}
          alt={t("landing.trusted.clients.client5")}
          className="h-10 sm:h-14"
        />
      </div>
    </section>
  );
};

export default LandingPageTrusted;
