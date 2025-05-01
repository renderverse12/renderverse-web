// import ParallaxSection from "@/components/shared/ParallaxSection";
import { Separator } from "@/components/ui/separator";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const AzureProcess = () => {
  const { t } = useTranslation();

  // Pull in the steps array from translations
  const steps = t("caseStudiesAzure.process.steps", {
    returnObjects: true,
  }) as {
    heading: string;
    description: string;
    imageKey: string;
  }[];

  // Label and alts for “items used”
  const itemsUsedLabel = t("caseStudiesAzure.process.itemsUsedLabel");
  const itemsAlts = t("caseStudiesAzure.process.itemsAlts", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-12 md:px-20 lg:px-60"
      >
        {t("caseStudiesAzure.process.title")}
      </h2>

      <div className="flex flex-col gap-y-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              idx % 2 === 1
                ? "flex-col-reverse lg:flex-row-reverse"
                : "lg:flex-row"
            } items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60`}
          >
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:w-1/2 text-center lg:text-left"
            >
              {`${idx + 1}. `}
              <span className="font-bold text-gray-200">
                {step.heading}
              </span>{" "}
              {step.description}
            </p>
            <img
              src={(images as any)[step.imageKey]}
              alt={t(`caseStudiesAzure.process.stepAlts.${idx}`)}
              className="h-72 w-full max-w-md object-cover"
              data-aos="zoom-in"
              data-aos-duration="700"
            />
          </div>
        ))}

        <Separator />

        <i className="text-gray-300 text-center capitalize font-semibold">
          {itemsUsedLabel}
        </i>

        <div className="overflow-x-auto lg:overflow-hidden h-72 py-10 pl-4">
          <div className="flex gap-x-6 min-w-fit">
            {itemsAlts.map((alt, idx) => {
              const key = `azureProcess${idx + 2}`; // images.azureProcess2 ... azureProcess6
              return (
                <img
                  key={idx}
                  src={(images as any)[key]}
                  alt={alt}
                  className="h-full object-cover w-auto flex-shrink-0"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureProcess;
