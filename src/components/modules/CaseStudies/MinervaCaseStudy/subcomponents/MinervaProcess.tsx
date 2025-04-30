import { images } from "@/utils/constants";
import { Separator } from "@radix-ui/react-separator";

const MinervaProcess = () => {
  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-6 lg:px-60"
      >
        Process
      </h2>
      <div className="flex flex-col gap-y-10">
        {/* First Image and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 text-center md:text-left"
          >
            Our journey began with detailed 3D modeling of the property using
            the provided floor plans, ensuring precise dimensions and spatial
            accuracy. The client also supplied exact location details, allowing
            us to replicate the site authentically, setting a strong foundation
            for achieving photorealistic renderings.
          </p>
          <img
            src={images.minervaProcess42}
            className="w-full md:h-72 object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>

        {/* Process Images */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <img
            src={images.minervaProcess2}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess6}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess4}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess28}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess40}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
        </div>

        {/* Process Description */}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16"
        >
          With inspiration from the client and the creative expertise of our
          team, we meticulously designed the interiors to reflect a seamless
          blend of luxury and comfort. We carefully selected and finalized
          textures that would enhance the elegance and sophistication of the
          space, aligning perfectly with the client's vision.
        </p>

        {/* More Process Images */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <img
            src={images.minervaProcess44}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess45}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.minervaProcess46}
            className="h-72 md:h-96"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
        </div>

        <Separator />
        <i className="text-gray-300 text-center capitalize font-semibold">
          Materials used
        </i>
        <div className="flex flex-wrap justify-center py-10 gap-x-6 gap-y-8">
          <img src={images.minervaProcess27} className="w-40 md:w-56" />
          <img src={images.minervaProcess26} className="w-40 md:w-56" />
          <img src={images.minervaProcess21} className="w-40 md:w-56" />
          <img src={images.minervaProcess15} className="w-40 md:w-56" />
          <img src={images.minervaProcess10} className="w-40 md:w-56" />
        </div>

        <Separator />

        {/* Final Process Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-4 sm:px-6 md:px-16">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 text-center md:text-left"
          >
            Following this structured process, we successfully achieved final
            renderings that precisely matched the client’s expectations and
            specifications. These visuals presented a true reflection of the
            project's intended aesthetics and quality, bringing the Minerva
            House vision to life.
          </p>
          <img
            src={images.minervaProcess29}
            className="w-full md:h-96 object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
      </div>
    </section>
  );
};

export default MinervaProcess;
