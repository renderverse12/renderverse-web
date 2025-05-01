import { images } from "@/utils/constants";
import { Separator } from "@radix-ui/react-separator";
import { useTranslation } from "react-i18next";

const MinervaProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-6 lg:px-60"
      >
        {t("caseStudiesMinerva.process.title")}
      </h2>

      <div className="flex flex-col gap-y-10">
        {/* First Image and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 text-center md:text-left"
          >
            {t("caseStudiesMinerva.process.modeling")}
          </p>
          <img
            src={images.minervaProcess42}
            alt={t("caseStudiesMinerva.process.altModeling")}
            className="w-full md:h-72 object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>

        {/* Process Images */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[
            images.minervaProcess2,
            images.minervaProcess6,
            images.minervaProcess4,
            images.minervaProcess28,
            images.minervaProcess40,
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={t("caseStudiesMinerva.process.altImageGroupOne", { index })}
              className="h-72 md:h-96"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            />
          ))}
        </div>

        {/* Process Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16"
        >
          {t("caseStudiesMinerva.process.interiorDesign")}
        </p>

        {/* More Process Images */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[
            images.minervaProcess44,
            images.minervaProcess45,
            images.minervaProcess46,
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={t("caseStudiesMinerva.process.altImageGroupTwo", { index })}
              className="h-72 md:h-96"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            />
          ))}
        </div>

        <Separator />
        <i className="text-gray-300 text-center capitalize font-semibold">
          {t("caseStudiesMinerva.process.materialsTitle")}
        </i>
        <div className="flex flex-wrap justify-center py-10 gap-x-6 gap-y-8">
          {[
            images.minervaProcess27,
            images.minervaProcess26,
            images.minervaProcess21,
            images.minervaProcess15,
            images.minervaProcess10,
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={t("caseStudiesMinerva.process.altMaterials", { index })}
              className="w-40 md:w-56"
            />
          ))}
        </div>

        <Separator />

        {/* Final Process Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 text-center md:text-left mb-8"
          >
            {t("caseStudiesMinerva.process.finalRenderings")}
          </p>
          <img
            src={images.minervaProcess29}
            alt={t("caseStudiesMinerva.process.altFinal")}
            className="w-full md:h-96 object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
      </div>
    </section>
  );
};

export default MinervaProcess;
