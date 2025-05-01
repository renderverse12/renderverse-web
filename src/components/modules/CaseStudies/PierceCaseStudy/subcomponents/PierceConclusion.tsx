import Masonry from "@/blocks/Components/Masonry/Masonry";
import Page from "@/components/shared/Page";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const PierceConclusion = () => {
  const { t } = useTranslation();

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
        <h2 className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight py-2 text-center">
          {t("caseStudiesPierce.conclusion.title")}
        </h2>

        <div className="px-2 md:px-0">
          <Masonry data={data} />
        </div>

        <i>
          <p className="my-4 md:my-8 text-center text-gray-300/90 font-bold text-base md:text-xl px-2 md:px-0">
            {t("caseStudiesPierce.conclusion.description")}
          </p>
        </i>
      </section>
    </Page>
  );
};

export default PierceConclusion;
