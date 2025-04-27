import { images, routes } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Page from "@/components/shared/Page";
import { Separator } from "@/components/ui/separator";

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-auto"></div>

        <h2 className="absolute bottom-6 left-8 text-white text-5xl font-bold tracking-wider">
          Case Studies
        </h2>
      </section>
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          {/* Left Side - Image */}
          <div className="relative w-full md:w-[50%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.azureCaseStudy3}
              alt="Render Verse Visualization"
              className="w-[70vw] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:pl-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Azure II Case Study
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Azure II Paje is an upcoming luxury residential development by The
              Village Group, situated in Paje on Zanzibar's east coast. Designed
              to offer an unparalleled blend of modern luxury and natural
              beauty, the project aims to redefine upscale living in the region.
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => {
                navigate(routes.azure);
              }}
            >
              View Case Study
            </Button>
          </div>
        </section>
      </Page>
      <Separator />
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          {/* Left Side - content */}
          <div className="w-full md:w-[70%] mt-8 md:mt-0 md:pr-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Minerva House Case Study
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Minerva House is a distinguished private residence in New Jersey,
              embodying a perfect balance of contemporary elegance and comfort.
              Thoughtfully designed with a focus on refined living, the property
              seamlessly integrates modern architectural aesthetics with
              functional luxury, offering an inviting and sophisticated home
              environment. This project aims to provide an upscale living
              experience through meticulous architectural design and high-end
              finishes.
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => {
                navigate(routes.minerva);
              }}
            >
              View Case Study
            </Button>
          </div>

          {/* Right Side - image */}

          <div className="relative w-full md:w-[40%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.minervaCaseStudy2}
              alt="Render Verse Visualization"
              className="max-w-full h-[70vh] rounded-lg shadow-lg"
            />
          </div>
        </section>
      </Page>
      <Separator />

      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-12">
          {/* Left Side - Image */}
          <div className="relative w-full md:w-[70%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.pierceConclusion7}
              alt="Render Verse Visualization"
              className="max-w-full h-[70vh] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-[70%] mt-8 md:mt-0 md:pl-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              1920 Pierce Case Study
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              1920 Pierce offers a refined living experience, blending classic
              elegance with modern comfort. Ideally located in Hollywood, FL,
              near Fort Lauderdale and Aventura, it provides residents with
              premier coastal living and urban convenience.
            </p>

            <Button
              className="mt-6 bg-[#2176ff] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => {
                navigate(routes.pierce);
              }}
            >
              View Case Study
            </Button>
          </div>
        </section>
      </Page>
    </>
  );
};

export default CaseStudies;
