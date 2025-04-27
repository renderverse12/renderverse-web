import Masonry from "@/blocks/Components/Masonry/Masonry";
import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const MinervaConclsuion = () => {
  const dataOne = [
    { id: 1, image: images.minervaConclusion9, height: 1000 },
    { id: 2, image: images.minervaConclusion7, height: 800 },
    { id: 3, image: images.minervaConclusion10, height: 600 },
    { id: 4, image: images.minervaConclusion4, height: 1000 },
    { id: 5, image: images.minervaConclusion1, height: 800 },
    { id: 6, image: images.minervaConclusion8, height: 600 },
  ];

  const dataTwo = [
    { id: 2, image: images.minervaConclusion15, height: 900 },
    { id: 1, image: images.minervaConclusion17, height: 1400 },
    { id: 3, image: images.minervaConclusion14, height: 900 },
    { id: 4, image: images.minervaConclusion6, height: 1400 },
    { id: 5, image: images.minervaConclusion16, height: 1400 },
    { id: 6, image: images.minervaConclusion11, height: 900 },
  ];
  return (
    <Page styling="bg-[#111] ">
      <section className="bg-[#111] py-8 space-y-8">
        <h2 className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center">
          Conclusion
        </h2>
        <Masonry data={dataOne} />
        <p className="mb-10 text-center text-gray-300/90 font-semibold text-xl">
          Through advanced 3D architectural visualization, Render Verse
          successfully brought Minerva House to life, strengthening its
          positioning in the luxury residential market.
        </p>
        <Masonry data={dataTwo} />

        <i>
          <p className="my-8 text-center text-gray-300/90 font-bold text-xl">
            The high-quality visuals successfully conveyed the essence of
            Minerva House, ensuring the design vision was fully realized to meet
            the owner's expectations.
          </p>
        </i>
      </section>
    </Page>
  );
};

export default MinervaConclsuion;
