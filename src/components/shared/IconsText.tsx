import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Page from "./Page";

const IconsText = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#111] py-10 px-4 md:px-0">
        <SpotlightCard
          className="custom-spotlight-card w-full min-h-[200px]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-lg md:text-xl font-bold text-gray-200 leading-tight text-center mb-6 md:mb-10">
            Brand Visibility
          </p>
          <p className="text-gray-300/90 font-semibold text-base md:text-lg mt-2 text-center">
            Capture attention with stunning 3D visuals that set your projects
            apart.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card w-full min-h-[200px]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-lg md:text-xl font-bold text-gray-200 leading-tight text-center mb-6 md:mb-10">
            New Conversions
          </p>
          <p className="text-gray-300/90 font-semibold text-base md:text-lg mt-2 text-center">
            Turn interest into action with immersive, pre-construction previews.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card w-full min-h-[200px]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-lg md:text-xl font-bold text-gray-200 leading-tight text-center mb-6 md:mb-10">
            Accelerate Sales
          </p>
          <p className="text-gray-300/90 font-semibold text-base md:text-lg mt-2 text-center">
            Help buyers decide faster with clear, compelling visuals.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card w-full min-h-[200px]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-lg md:text-xl font-bold text-gray-200 leading-tight text-center mb-6 md:mb-10">
            Enhanced Client Communications
          </p>
          <p className="text-gray-300/90 font-semibold text-base md:text-lg mt-2 text-center">
            Streamline discussions with realistic renderings that speak for
            themselves.
          </p>
        </SpotlightCard>
      </section>
    </Page>
  );
};

export default IconsText;
  