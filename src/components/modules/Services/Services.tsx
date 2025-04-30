import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const servicesPage = [
    {
      key: "exterior",
      image: images.featuredThree,
      tab: "exterior",
      reverse: false,
    },
    {
      key: "interior",
      image: images.interior54,
      tab: "interior",
      reverse: true,
    },
    {
      key: "commercial",
      image: images.commercial18,
      tab: "commercial",
      reverse: false,
    },
    {
      key: "floorPlan",
      image: images.FloorPlan4,
      tab: "3d-floor-plan",
      reverse: true,
    },
    {
      key: "virtualTour",
      image: images.virtualTour9,
      external: "https://tour.panoee.net/67d2a35c4b056f7e6ecee26d",
      reverse: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.featuredThree})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
        <h2 className="absolute bottom-6 left-6 md:left-10 text-white text-4xl md:text-6xl font-bold tracking-wider z-20">
          {t("servicesPage.title")}
        </h2>
      </section>

      {/* Services List */}
      {servicesPage.map((item, index) => (
        <div key={index}>
          <Page styling="bg-[#111]">
            <section
              className={`flex flex-col-reverse ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10 px-4 lg:px-16 py-16 max-w-7xl mx-auto`}
            >
              {/* Text Block */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6 leading-snug">
                  {t(`servicesPage.${item.key}.title`)}
                </h2>
                <p className="text-gray-300 text-lg md:text-xl font-medium">
                  {t(`servicesPage.${item.key}.description`)}
                </p>
                {item.external ? (
                  <a
                    href={item.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-6 bg-[#2176ff] text-white hover:bg-[#1a5bb7] px-6 py-3 rounded-lg shadow-md">
                      {t(`servicesPage.${item.key}.button`)}
                    </Button>
                  </a>
                ) : (
                  <Button
                    onClick={() => navigate(`/portfolio?tab=${item.tab}`)}
                    className="mt-6 bg-[#2176ff] text-white hover:bg-[#1a5bb7] px-6 py-3 rounded-lg shadow-md"
                  >
                    {t("servicesPage.viewMore")}
                  </Button>
                )}
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={t(`servicesPage.${item.key}.title`)}
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
