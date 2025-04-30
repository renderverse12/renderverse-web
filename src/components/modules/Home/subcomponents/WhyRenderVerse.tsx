import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { images, routes } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const WhyRenderVerse = () => {
  const navigate = useNavigate();
  return (
    <Page styling="bg-[#111]">
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-8 md:py-12 px-4 md:px-0">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-[40%] flex justify-center">
          <img
            data-aos="zoom-in"
            data-aos-duration="700"
            src={images.interior44}
            alt="Render Verse Visualization"
            className="max-w-full h-[50vh] md:h-[70vh] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[60%] mt-8 md:mt-0 md:pl-10 px-4 md:px-0">
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight mb-6 md:mb-10"
          >
            Render Verse is a leading 3D visualization studio.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="mt-4 text-xl md:text-3xl text-gray-300 font-semibold"
          >
            Delivering high-end rendering solutions for the heart of Middle
            Eastern real estate.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-base md:text-xl mt-4 md:mt-6"
          >
            We specialize in hyper-realistic exterior and interior
            visualizations, helping developers, architects, and investors bring
            projects to market with confidence. From luxury residences and
            commercial developments to off-plan sales and large-scale master
            plans, our expertise ensures every detail is presented with
            precision and impact.
          </p>

          <Button
            className="mt-6 bg-[#2176ff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7] text-sm md:text-base"
            onClick={() => {
              navigate(routes.caseStudy);
            }}
          >
            Discover Our Visualization Solutions
          </Button>
        </div>
      </section>
    </Page>
  );
};

export default WhyRenderVerse;