import Masonry from "@/blocks/Components/Masonry/Masonry";
import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";

const PierceConclusion = () => {
  const data = [
    { id: 2, image: images.pierceConclusion1, height: 800 },
    { id: 1, image: images.pierceConclusion3, height: 1200 },
    { id: 3, image: images.pierceConclusion7, height: 800 },
    { id: 4, image: images.pierceConclusion10, height: 1200 },
    { id: 5, image: images.pierceConclusion6, height: 1200 },
    { id: 6, image: images.pierceProcess1, height: 800 },
  ];
  return (
    <Page styling="bg-[#111] ">
      <section className="bg-[#111] py-8 space-y-8">
        <h2 className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center">
          Conclusion
        </h2>

        <Masonry data={data} />

        <i>
          <p className="my-8 text-center text-gray-300/90 font-bold text-xl">
            Render Verse successfully captured the essence of 1920 Pierce
            through compelling visualizations, strengthening its market appeal
            and supporting sales efforts with engaging, photorealistic
            presentations.
          </p>
        </i>
      </section>
    </Page>
  );
};

export default PierceConclusion;
