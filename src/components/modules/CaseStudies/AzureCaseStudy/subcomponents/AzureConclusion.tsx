import Masonry from "@/blocks/Components/Masonry/Masonry";
import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const AzureConclusion = () => {
  const dataOne = [
    { id: 1, image: images.azureConclusion1, height: 1000 },
    { id: 2, image: images.azureConclusion7, height: 800 },
    { id: 3, image: images.azureConclusion15, height: 600 },
    { id: 4, image: images.azureConclusion11, height: 1000 },
    { id: 5, image: images.azureConclusion5, height: 800 },
    { id: 6, image: images.azureConclusion16, height: 600 },
  ];

  const dataTwo = [
    { id: 2, image: images.azureConclusion32, height: 600 },
    { id: 1, image: images.azureConclusion39, height: 1600 },
    { id: 3, image: images.azureConclusion33, height: 600 },
    { id: 4, image: images.azureConclusion40, height: 1600 },
    { id: 5, image: images.azureConclusion42, height: 1600 },
    { id: 6, image: images.azureConclusion31, height: 600 },
  ];

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-10 px-4 sm:px-6 md:px-10 space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight text-center">
          Conclusion
        </h2>

        <Masonry data={dataOne} />

        <p className="text-center text-gray-300/90 font-semibold text-lg sm:text-xl max-w-3xl mx-auto">
          Through the power of 3D architectural visualization, Render Verse
          successfully translated The Village Group’s vision into a compelling
          digital experience.
        </p>

        <Masonry data={dataTwo} />

        <i>
          <p className="text-center text-gray-300/90 font-bold text-lg sm:text-xl max-w-4xl mx-auto">
            The Azure II project now stands as a benchmark for luxury real
            estate in Zanzibar, leveraging high-quality visuals to drive sales
            and investor confidence.
          </p>
        </i>
      </section>
    </Page>
  );
};

export default AzureConclusion;
