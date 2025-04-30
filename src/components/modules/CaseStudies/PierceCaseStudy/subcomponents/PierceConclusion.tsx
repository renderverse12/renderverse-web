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
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-4 md:py-8 space-y-4 md:space-y-8 px-4">
        {/* Responsive heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight py-2 text-center">
          Conclusion
        </h2>

        {/* Masonry grid - ensure your Masonry component is responsive */}
        <div className="px-2 md:px-0">
          <Masonry data={data} />
        </div>

        {/* Responsive text */}
        <i>
          <p className="my-4 md:my-8 text-center text-gray-300/90 font-bold text-base md:text-xl px-2 md:px-0">
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