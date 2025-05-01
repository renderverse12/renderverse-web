import { videos } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const LandingPageHero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section w-full h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos.heroAnimation} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/15"></div>

      <div className="absolute top-1/2 left-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {t("landing.hero.title")}
        </h1>
        <h2
          className="font-montserrat mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {t("landing.hero.subtitle")}
        </h2>
      </div>
    </section>
  );
};

export default LandingPageHero;
