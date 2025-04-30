import Page from "@/components/shared/Page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialData } from "@/utils/constants";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Testimonials = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-10 px-4 md:px-0">
        {/* Grid: 1 col on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Heading */}
          <div className="font-openSans font-semibold text-newWhite mt-4 md:mt-10">
            <p
              className="text-4xl sm:text-5xl md:text-6xl text-gray-200"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {t("testimonials.heading")} {/* Dynamic heading */}
            </p>
          </div>

          {/* Right Cell: carousel on md+, vertical list on mobile */}
          <div className="w-full">
            {/* Mobile: vertical stack */}
            <div className="flex flex-col gap-8 md:hidden mt-6">
              {testimonialData.map(
                ({ id, name, occupation, descriptionKey, rating }) => (
                  <Card
                    key={id}
                    className="bg-transparent border-gray-300/90 w-full"
                  >
                    <CardContent className="p-6 rounded-xl flex flex-col items-center">
                      <div className="flex gap-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            color="#ffcc14"
                            fill={i < Math.floor(rating) ? "#ffcc14" : "none"}
                            size={20}
                          />
                        ))}
                      </div>

                      <p className="text-md mt-4 text-center text-gray-300/90 font-medium">
                        {t(descriptionKey)} {/* Use translation key */}
                      </p>
                      <div className="text-end w-full mt-2">
                        <p className="text-lg font-bold text-gray-200">
                          — {name}
                        </p>
                        <span className="text-md font-semibold text-gray-300">
                          {occupation}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>

            {/* Desktop + Laptop: original carousel */}
            <div className="hidden md:block">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonialData.map(
                    ({ id, name, occupation, descriptionKey, rating }) => (
                      <CarouselItem
                        key={id}
                        className="w-full sm:w-80 md:w-56 p-6 sm:p-10 relative mx-auto"
                      >
                        <Card className="bg-transparent border-gray-300/90">
                          <CardContent className="p-6 rounded-xl flex flex-col items-center">
                            <div className="flex gap-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  color="#ffcc14"
                                  fill={
                                    i < Math.floor(rating) ? "#ffcc14" : "none"
                                  }
                                  size={20}
                                />
                              ))}
                            </div>

                            <p className="text-md mt-4 text-center text-gray-300/90 font-medium">
                              {t(descriptionKey)} {/* Use translation key */}
                            </p>
                            <div className="text-end w-full mt-2">
                              <p className="text-lg font-bold text-gray-200">
                                — {name}
                              </p>
                              <span className="text-md font-semibold text-gray-300">
                                {occupation}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious className="absolute top-[300px] left-[80%] bg-transparent border-none hover:bg-transparent text-gray-300" />
                <CarouselNext className="absolute top-[300px] left-[87%] bg-transparent border-none hover:bg-transparent text-gray-300" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Testimonials;
