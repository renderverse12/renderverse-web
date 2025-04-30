import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const MinervaGoals = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-8 space-y-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 leading-tight py-2 text-center"
        >
          Goals
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-gray-300/90 font-semibold text-lg sm:text-xl text-center space-y-8 px-4 sm:px-8"
        >
          The objective of Minerva House was to establish a contemporary visual
          concept that highlights its modern and luxurious appeal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-5 sm:gap-y-0">
          <img
            src={images.minervaGoals1}
            className="h-[30rem] w-full sm:w-auto"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={images.minervaGoals6}
            className="h-[30rem] w-full sm:w-auto"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          />
        </div>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-gray-300/90 font-semibold text-lg sm:text-xl text-center space-y-8 px-4 sm:px-8"
        >
          As a private home, the focus was on creating a refined and luxurious
          living space tailored to the owner’s personal preferences and
          lifestyle. Additionally, a key focus was placed on accurately
          representing the selected materials and finishes, ensuring
          high-quality visualization for marketing and sales purposes.
        </p>
      </section>
    </Page>
  );
};

export default MinervaGoals;
