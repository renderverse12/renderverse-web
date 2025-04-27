import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const AzureOverview = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111]  py-8 space-y-8">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-60"
        >
          Project Overview
        </h2>
        <div className="flex gap-x-20 items-center justify-center">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-gray-300/90 font-semibold text-2xl w-1/2"
          >
            Azure II Paje is an upcoming luxury residential development by The
            Village Group, situated in Paje on Zanzibar's east coast. Designed
            to offer an unparalleled blend of modern luxury and natural beauty,
            the project aims to redefine upscale living in the region.
          </p>
          <img
            src={images.azureCaseStudy1}
            className="h-96"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
        </div>
      </section>
    </Page>
  );
};

export default AzureOverview;
