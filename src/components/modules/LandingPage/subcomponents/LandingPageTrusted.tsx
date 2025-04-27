import { images } from "@/utils/constants";

const LandingPageTrusted = () => {
  return (
    <section className="py-10 text-center bg-[#111]">
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-5xl font-bold text-center text-gray-200 leading-tight  my-8 "
      >
        Trusted by Real Estate Leaders
      </h2>

      <div className="flex justify-center space-x-10 mt-5 items-center">
        <img
          src={images.trustedPartnersWhite1}
          alt="Client 1"
          className="h-14"
        />
        <img
          src={images.trustedPartnersWhite2}
          alt="Client 2"
          className="h-28"
        />
        <img
          src={images.trustedPartnersWhite3}
          alt="Client 3"
          className="h-10"
        />

        <img
          src={images.trustedPartnersWhite4}
          alt="Client 4"
          className="h-16"
        />
        <img
          src={images.trustedPartnersWhite5}
          alt="Client 5"
          className="h-14"
        />
      </div>
    </section>
  );
};

export default LandingPageTrusted;
