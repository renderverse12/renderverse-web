import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const PierceGoals = () => {
  return (
    <Page styling=" bg-[#111]">
      <section className=" bg-[#111] py-8 space-y-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold text-gray-200 leading-tight py-2 text-center"
        >
          Goals
        </h2>
        <div className="flex items-center justify-center gap-x-32">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-xl space-y-8"
          >
            Our objective was to create high-quality renderings to enhance
            project marketing and accelerate apartment sales. The design needed
            to balance simplicity with sophistication, ensuring it aligned with
            the client’s vision. Every space within the project was carefully
            visualized to provide a comprehensive representation. Accuracy in
            textures and materials was prioritized to maintain authenticity. The
            final visuals effectively communicated the development’s elegance
            and functionality.
          </p>

          <img
            src={images.pierceGoals1}
            className="h-96"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <img
            src={images.pierceGoals2}
            className="h-80"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceGoals3}
            className="h-80"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceGoals5}
            className="h-80"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
        </div>
      </section>
    </Page>
  );
};

export default PierceGoals;
