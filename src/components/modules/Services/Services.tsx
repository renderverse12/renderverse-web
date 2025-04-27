import Page from "@/components/shared/Page";
import {
  images,
  // routes,
  // serviceCommercialData,
  // serviceFloorPlanData,
  // serviceInteriorData,
  // serviceVirtualTourData,
} from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-auto"></div>

        <h2 className="absolute bottom-6 left-8 text-white text-5xl font-bold tracking-wider">
          Services
        </h2>
      </section>
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          <div className="relative w-full md:w-[50%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.featuredThree}
              alt="Render Verse Visualization"
              className="w-[70vw] rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:pl-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Exterior Visualization
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Bring your architectural designs to life with stunning 3D
              renderings of exteriors. Showcase building facades, landscaping,
              and lighting in high detail for a realistic preview.
            </p>

            <Button
              className=" mt-6 bg-[#2176ff] text-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => navigate("/portfolio?tab=exterior")}
            >
              View More
            </Button>
          </div>
        </section>
      </Page>
      <Separator />
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:pr-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Interior Visualization
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Visualize your interior spaces with photorealistic 3D renderings,
              highlighting layouts, décor, and materials. Perfect for showcasing
              residential or commercial interiors before implementation.
            </p>

            <Button
              className=" mt-6 bg-[#2176ff] text-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => navigate("/portfolio?tab=interior")}
            >
              View More
            </Button>
          </div>

          <div className="relative w-full md:w-[50%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.interior54}
              alt="Render Verse Visualization"
              className="max-w-full w-[70vw] rounded-lg shadow-lg"
            />
          </div>
        </section>
      </Page>
      <Separator />
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-12">
          <div className="relative w-full md:w-[70%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.commercial18}
              alt="Render Verse Visualization"
              className="max-w-full w-[70vw] rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-[70%] mt-8 md:mt-0 md:pl-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Commercial Visualization
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Elevate your commercial spaces with detailed 3D renderings.
              Present offices, retail, and hospitality projects with creativity
              and precision for impactful presentations.
            </p>

            <Button
              className=" mt-6 bg-[#2176ff] text-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => navigate("/portfolio?tab=commercial")}
            >
              View More
            </Button>
          </div>
        </section>
      </Page>
      <Separator />
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:pr-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              3D Floor Plans
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Experience your space in 3D with accurate floor plan models.
              Understand layout, flow, and dimensions for better design and
              spatial decisions.
            </p>

            <Button
              className=" mt-6 bg-[#2176ff] text-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]"
              onClick={() => navigate("/portfolio?tab=3d-floor-plan")}
            >
              View More
            </Button>
          </div>

          <div className="relative w-full md:w-[50%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.FloorPlan4}
              alt="Render Verse Visualization"
              className="max-w-full w-[70vw] rounded-lg shadow-lg"
            />
          </div>
        </section>
      </Page>
      <Separator />

      <Separator />
      <Page styling="bg-[#111]">
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#111] py-20">
          <div className="relative w-full md:w-[50%] flex justify-center">
            <img
              data-aos="zoom-in"
              data-aos-duration="700"
              src={images.virtualTour9}
              alt="Render Verse Visualization"
              className="max-w-full w-[70vw] rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:pl-10">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl font-bold text-gray-200 leading-tight mb-10"
            >
              Virtual Tour
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="mt-4 text-gray-300/90 font-semibold text-xl"
            >
              Explore your designs interactively with a 3D virtual tour. Walk
              through your project and engage with the space in real time for an
              immersive experience.
            </p>

            <a
              href="https://tour.panoee.net/67d2a35c4b056f7e6ecee26d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className=" mt-6 bg-[#2176ff] text-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-[#1a5bb7]">
                View Virtual Tour
              </Button>
            </a>
          </div>
        </section>
      </Page>
    </>
  );
};

export default Services;
