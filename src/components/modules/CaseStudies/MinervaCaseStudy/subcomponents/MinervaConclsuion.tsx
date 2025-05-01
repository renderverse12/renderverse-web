import Masonry from "@/blocks/Components/Masonry/Masonry";
import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const MinervaConclsuion = () => {
  const { t } = useTranslation();

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
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-8 space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight py-2 text-center px-4 sm:px-8">
          {t("caseStudiesMinerva.conclusion.title")}
        </h2>

        {/* First Masonry Section */}
        <Masonry data={dataOne} />

        <p className="mb-10 text-center text-gray-300/90 font-semibold text-lg sm:text-xl px-4 sm:px-8">
          {t("caseStudiesMinerva.conclusion.paragraph1")}
        </p>

        {/* Second Masonry Section */}
        <Masonry data={dataTwo} />

        {/* Quote Section */}
        <i>
          <p className="my-8 text-center text-gray-300/90 font-bold text-lg sm:text-xl px-4 sm:px-8">
            {t("caseStudiesMinerva.conclusion.quote")}
          </p>
        </i>
      </section>
    </Page>
  );
};

export default MinervaConclsuion;
