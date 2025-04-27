import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const AzureGoals = () => {
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
          <div className="space-y-8">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-300/90 font-semibold text-xl "
            >
              <span className="text-[#2176ff] mr-2">•</span> To create modern
              and sleek visuals while embracing Zanzibar’s exotic textures, warm
              tones, and coastal elegance, ensuring harmony with its stunning
              environment.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-gray-300/90 font-semibold text-xl "
            >
              <span className="text-[#2176ff] mr-2">•</span> To maximize ROI,
              the design seamlessly blended African aesthetics with luxury,
              creating a unique appeal for high-end investors.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-gray-300/90 font-semibold text-xl "
            >
              <span className="text-[#2176ff] mr-2">•</span> Deliver precise,
              high-quality visuals that showcase every interior and exterior
              detail with true-to-life accuracy.
            </p>
          </div>
          <img
            src={images.azureGoals2}
            className="h-80"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <img
            src={images.azureGoals1}
            className="h-96"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="450"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={images.azureGoals3}
            className="h-96"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={images.azureGoals4}
            className="h-96"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </section>
    </Page>
  );
};

export default AzureGoals;
