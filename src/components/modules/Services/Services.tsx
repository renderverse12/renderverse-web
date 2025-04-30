import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="hero-section relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.featuredThree})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
        <h2 className="absolute bottom-6 left-6 md:left-10 text-white text-4xl md:text-6xl font-bold tracking-wider z-20">
          Services
        </h2>
      </section>

      {/* Service Sections */}
      {[
        {
          title: "Exterior Visualization",
          description:
            "Bring your architectural designs to life with stunning 3D renderings of exteriors. Showcase building facades, landscaping, and lighting in high detail for a realistic preview.",
          image: images.featuredThree,
          tab: "exterior",
          reverse: false,
        },
        {
          title: "Interior Visualization",
          description:
            "Visualize your interior spaces with photorealistic 3D renderings, highlighting layouts, décor, and materials. Perfect for showcasing residential or commercial interiors before implementation.",
          image: images.interior54,
          tab: "interior",
          reverse: true,
        },
        {
          title: "Commercial Visualization",
          description:
            "Elevate your commercial spaces with detailed 3D renderings. Present offices, retail, and hospitality projects with creativity and precision for impactful presentations.",
          image: images.commercial18,
          tab: "commercial",
          reverse: false,
        },
        {
          title: "3D Floor Plans",
          description:
            "Experience your space in 3D with accurate floor plan models. Understand layout, flow, and dimensions for better design and spatial decisions.",
          image: images.FloorPlan4,
          tab: "3d-floor-plan",
          reverse: true,
        },
        {
          title: "Virtual Tour",
          description:
            "Explore your designs interactively with a 3D virtual tour. Walk through your project and engage with the space in real time for an immersive experience.",
          image: images.virtualTour9,
          external: "https://tour.panoee.net/67d2a35c4b056f7e6ecee26d",
        },
      ].map((item, index) => (
        <div key={index}>
          <Page styling="bg-[#111]">
            <section
              className={`flex flex-col-reverse ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10 px-4 lg:px-16 py-16 max-w-7xl mx-auto`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6 leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-lg md:text-xl font-medium">
                  {item.description}
                </p>
                {item.external ? (
                  <a
                    href={item.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-6 bg-[#2176ff] text-white hover:bg-[#1a5bb7] px-6 py-3 rounded-lg shadow-md">
                      View Virtual Tour
                    </Button>
                  </a>
                ) : (
                  <Button
                    onClick={() => navigate(`/portfolio?tab=${item.tab}`)}
                    className="mt-6 bg-[#2176ff] text-white hover:bg-[#1a5bb7] px-6 py-3 rounded-lg shadow-md"
                  >
                    View More
                  </Button>
                )}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                />
              </div>
            </section>
          </Page>
          <Separator />
        </div>
      ))}
    </>
  );
};

export default Services;
