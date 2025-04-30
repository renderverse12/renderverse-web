import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const PierceOverview = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-6 md:py-8 space-y-6 md:space-y-8 px-4 md:px-0">
        {/* Responsive Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 md:px-60"
        >
          Project Overview
        </h2>

        {/* Responsive Content Row - Stacks on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-20 items-center justify-center px-4 md:px-0">
          {/* Text Content - Full width on mobile, half on desktop */}
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-300/90 font-semibold text-base md:text-2xl w-full md:w-1/2"
          >
            1920 Pierce offers a refined living experience, blending classic
            elegance with modern comfort. Ideally located in Hollywood, FL, near
            Fort Lauderdale and Aventura, it provides residents with premier
            coastal living and urban convenience.
          </p>

          {/* Image - Full width on mobile, auto width on desktop */}
          <img
            src={images.pierceHero3}
            className="w-full md:w-auto h-64 md:h-96 object-cover"
            data-aos="zoom-in"
            data-aos-duration="1500"
            alt="1920 Pierce project overview"
          />
        </div>
      </section>
    </Page>
  );
};

export default PierceOverview;