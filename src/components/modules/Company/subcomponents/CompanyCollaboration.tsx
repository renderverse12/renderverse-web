import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Page from "@/components/shared/Page";

const CompanyCollaboration = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="py-8 bg-[#111] px-4 sm:px-6 md:px-0">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-200 leading-tight mb-6 mt-8"
        >
          We Collaborate with
        </h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-y-6 md:gap-y-0 gap-x-4 md:gap-x-5 py-10"
        >
          <SpotlightCard
            className="w-full sm:w-[45%] lg:w-[30%]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-lg sm:text-xl font-bold text-gray-200 leading-tight text-center mb-6 sm:mb-10">
              Real Estate Developers
            </p>
            <p className="text-gray-300/90 font-semibold text-base sm:text-lg mt-2 text-center">
              Driving off-plan sales with compelling visuals.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="w-full sm:w-[45%] lg:w-[30%]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-lg sm:text-xl font-bold text-gray-200 leading-tight text-center mb-6 sm:mb-10">
              Architects & Designers
            </p>
            <p className="text-gray-300/90 font-semibold text-base sm:text-lg mt-2 text-center">
              Bringing design concepts to life with precision.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="w-full sm:w-[45%] lg:w-[30%]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-lg sm:text-xl font-bold text-gray-200 leading-tight text-center mb-6 sm:mb-10">
              Marketing Agencies & Investors
            </p>
            <p className="text-gray-300/90 font-semibold text-base sm:text-lg mt-2 text-center">
              Elevating project presentations for maximum impact.
            </p>
          </SpotlightCard>
        </div>
      </section>
    </Page>
  );
};

export default CompanyCollaboration;
