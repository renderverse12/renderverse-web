import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Page from "@/components/shared/Page";

const CompanyCollaboration = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="py-8 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-5xl font-bold text-center text-gray-200 leading-tight mb-6 mt-8 "
        >
          We Collaborate with
        </h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          className="flex justify-between bg-[#111] py-10 gap-x-5"
        >
          <SpotlightCard
            className="custom-spotlight-card w-[50rem]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
              Real Estate Developers
            </p>
            <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
              Driving off-plan sales with compelling visuals.
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[50rem]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
              Architects & Designers
            </p>
            <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
              Bringing design concepts to life with precision.
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[50rem]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
              Marketing Agencies & Investors
            </p>
            <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
              Elevating project presentations for maximum impact.
            </p>
          </SpotlightCard>
        </div>
      </section>
    </Page>
  );
};

export default CompanyCollaboration;
