import ParallaxSection from "@/components/shared/ParallaxSection";
import { Separator } from "@/components/ui/separator";
import { images } from "@/utils/constants";

const AzureProcess = () => {
  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-12 md:px-20 lg:px-60"
      >
        Process
      </h2>

      <div className="flex flex-col gap-y-10">
        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-1/2 text-center lg:text-left"
          >
            1.{" "}
            <span className="font-bold text-gray-200">
              Understanding Client Vision:
            </span>{" "}
            Conducted in-depth consultations and multiple meetings to align with
            the developer’s branding and sales strategy.
          </p>
          <img
            src={images.azureProcess9}
            className="h-72 w-full max-w-md object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="Process Step 1"
          />
        </div>

        <ParallaxSection image={images.azureConclusion35} height="h-[50vh]" />

        {/* Step 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60">
          <img
            src={images.azureProcess8}
            className="h-72 w-full max-w-md object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="Process Step 2"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-1/2 text-center lg:text-left"
          >
            2.{" "}
            <span className="font-bold text-gray-200">
              Interior Renderings:
            </span>{" "}
            Created high-end visualizations reflecting a fusion of modern
            elegance and African-inspired design elements.
          </p>
        </div>

        <Separator />

        <i className="text-gray-300 text-center capitalize font-semibold">
          Items used
        </i>

        {/* Items used */}
        <div className="overflow-x-auto lg:overflow-hidden h-72 py-10 pl-4">
          <div className="flex gap-x-6 min-w-fit">
            {[
              images.azureProcess2,
              images.azureProcess3,
              images.azureProcess4,
              images.azureProcess5,
              images.azureProcess6,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Item ${idx + 1}`}
                className="h-full object-cover w-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <Separator />

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-1/2 text-center lg:text-left"
          >
            3.{" "}
            <span className="font-bold text-gray-200">
              Exterior Renderings:
            </span>{" "}
            Developed striking imagery capturing the lush, exotic landscapes of
            Zanzibar, enhancing the project’s appeal.
          </p>
          <img
            src={images.azureProcess1}
            className="h-72 w-full max-w-md object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="Process Step 3"
          />
        </div>

        <ParallaxSection image={images.azureConclusion36} height="h-[50vh]" />

        {/* Step 4 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60">
          <img
            src={images.azureProcess10}
            className="h-72 w-full max-w-md object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="Process Step 4"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-1/2 text-center lg:text-left"
          >
            4.{" "}
            <span className="font-bold text-gray-200">
              Walkthrough Animation:
            </span>{" "}
            Produced immersive interior and exterior animations to provide
            potential buyers with an engaging and detailed project exploration.
          </p>
        </div>

        <ParallaxSection image={images.azureConclusion38} height="h-[50vh]" />

        {/* Step 5 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-10 lg:px-60">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-1/2 text-center lg:text-left"
          >
            5. <span className="font-bold text-gray-200">Virtual Tour:</span>{" "}
            Designed an interactive 360° tour to offer a dynamic preview of the
            living experience.
          </p>
          <img
            src={images.azureProcess7}
            className="h-72 w-full max-w-md object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="Process Step 5"
          />
        </div>
      </div>
    </section>
  );
};

export default AzureProcess;
