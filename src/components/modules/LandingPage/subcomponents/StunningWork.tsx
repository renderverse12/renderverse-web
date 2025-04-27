import { Carousel } from "@/components/ui/carousel";
import { images } from "@/utils/constants";

const StunningWork = () => {
  return (
    <section className="py-12 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Stunning Work</h2>
      <Carousel>
        <img
          src={images.featuredOne}
          alt="3D Render 1"
          className="w-full h-[50vh] object-cover"
        />
        <img
          src={images.featuredTwo}
          alt="3D Render 2"
          className="w-full h-[50vh] object-cover"
        />
        <img
          src={images.featuredThree}
          alt="3D Render 3"
          className="w-full h-[50vh] object-cover"
        />
      </Carousel>
    </section>
  );
};

export default StunningWork;
