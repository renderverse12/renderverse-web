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

const Testimonials = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] grid grid-cols-2 py-10">
        <div className="font-openSans font-semibold text-newWhite mt-10">
          <p
            className="text-6xl text-gray-200"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Here's what people have to say about hiring us.
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {testimonialData.map(
              ({ id, name, occupation, description, rating }) => (
                <CarouselItem key={id} className="w-56 p-10 relative">
                  <Card className="bg-transparent border-gray-300/90">
                    <CardContent className="p-6 rounded-xl flex flex-col items-center">
                      {/* Dynamically render stars based on rating */}
                      <div className="flex gap-x-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            color="#ffcc14"
                            fill={
                              index < Math.floor(rating) ? "#ffcc14" : "none"
                            }
                            size={20}
                          />
                        ))}
                      </div>

                      <p className="text-md mt-4 text-center text-gray-300/90 font-medium">
                        {description}
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
          <CarouselPrevious className="absolute top-[300px] left-[80%] bg-transparent border-none hover:bg-transparent text-gray-300 hover:text-gray-300" />
          <CarouselNext className="absolute  top-[300px] left-[87%] bg-transparent border-none hover:bg-transparent text-gray-300 hover:text-gray-300" />
        </Carousel>
      </section>
    </Page>
  );
};

export default Testimonials;
