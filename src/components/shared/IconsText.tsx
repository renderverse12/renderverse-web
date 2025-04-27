import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Page from "./Page";

const IconsText = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="flex justify-between bg-[#111] py-10 gap-x-5">
        <SpotlightCard
          className="custom-spotlight-card w-[50rem]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
            Brand Visibility
          </p>
          <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
            Capture attention with stunning 3D visuals that set your projects
            apart.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card w-[50rem]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
            New Conversions
          </p>
          <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
            Turn interest into action with immersive, pre-construction previews.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card w-[50rem]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
            Accelerate Sales
          </p>
          <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
            Help buyers decide faster with clear, compelling visuals.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card w-[50rem]"
          spotlightColor="rgba(33,118,255,0.2)"
        >
          <p className="text-xl font-bold text-gray-200 leading-tight text-center mb-10">
            Enhanced Client Communications
          </p>
          <p className=" text-gray-300/90 font-semibold text-lg mt-2 text-center">
            Streamline discussions with realistic renderings that speak for
            themselves.
          </p>
        </SpotlightCard>
      </section>
    </Page>
  );
};

export default IconsText;
