import ParallaxSection from "@/components/shared/ParallaxSection";
import { Separator } from "@/components/ui/separator";
import { images } from "@/utils/constants";

const AzureProcess = () => {
  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-60"
      >
        Process
      </h2>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            1.
            <span className="font-bold text-gray-200">
              Understanding Client Vision:
            </span>{" "}
            Conducted in-depth consultations and multiple meetings to align with
            the developer’s branding and sales strategy.
          </p>
          <img
            src={images.azureProcess9}
            className="h-72"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
        <ParallaxSection image={images.azureConclusion35} height="h-[50vh]" />
        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <img
            src={images.azureProcess8}
            className="h-72"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            2.
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
        <div className="flex h-72 justify-center py-10 gap-x-14">
          <img src={images.azureProcess2} alt="" />
          <img src={images.azureProcess3} alt="" />
          <img src={images.azureProcess4} alt="" />
          <img src={images.azureProcess5} alt="" />
          <img src={images.azureProcess6} alt="" />
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            3.
            <span className="font-bold text-gray-200">
              Exterior Renderings:
            </span>{" "}
            Developed striking imagery capturing the lush, exotic landscapes of
            Zanzibar, enhancing the project’s appeal.
          </p>
          <img
            src={images.azureProcess1}
            className="h-72"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
        <ParallaxSection image={images.azureConclusion36} height="h-[50vh]" />

        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <img
            src={images.azureProcess10}
            className="h-72"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            4.
            <span className="font-bold text-gray-200">
              Walkthrough Animation:
            </span>{" "}
            Produced immersive interior and exterior animations to provide
            potential buyers with an engaging and detailed project exploration.
          </p>
        </div>
        <ParallaxSection image={images.azureConclusion38} height="h-[50vh]" />

        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            5.
            <span className="font-bold text-gray-200">Virtual Tour:</span>{" "}
            Designed an interactive 360° tour to offer a dynamic preview of the
            living experience.
          </p>
          <img
            src={images.azureProcess7}
            className="h-72"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
      </div>
    </section>
  );
};

export default AzureProcess;
