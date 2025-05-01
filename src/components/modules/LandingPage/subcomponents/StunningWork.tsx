import { Carousel } from "@/components/ui/carousel";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const StunningWork = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-200 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        {t("landing.stunning.title")}
      </h2>
      <Carousel>
        <img
          src={images.featuredOne}
          alt={t("landing.stunning.images.alt1")}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover rounded-lg"
        />
        <img
          src={images.featuredTwo}
          alt={t("landing.stunning.images.alt2")}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover rounded-lg"
        />
        <img
          src={images.featuredThree}
          alt={t("landing.stunning.images.alt3")}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover rounded-lg"
        />
      </Carousel>
    </section>
  );
};

export default StunningWork;
