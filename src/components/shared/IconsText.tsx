import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import Page from "./Page";
import { useTranslation } from "react-i18next";

const IconsText = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("iconsText.brandVisibility.title"),
      description: t("iconsText.brandVisibility.description"),
    },
    {
      title: t("iconsText.newConversions.title"),
      description: t("iconsText.newConversions.description"),
    },
    {
      title: t("iconsText.accelerateSales.title"),
      description: t("iconsText.accelerateSales.description"),
    },
    {
      title: t("iconsText.enhancedCommunication.title"),
      description: t("iconsText.enhancedCommunication.description"),
    },
  ];

  return (
    <Page styling="bg-[#111]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#111] py-10 px-4 md:px-0">
        {items.map((item, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card w-full min-h-[200px]"
            spotlightColor="rgba(33,118,255,0.2)"
          >
            <p className="text-lg md:text-xl font-bold text-gray-200 leading-tight text-center mb-6 md:mb-10">
              {item.title}
            </p>
            <p className="text-gray-300/90 font-semibold text-base md:text-lg mt-2 text-center">
              {item.description}
            </p>
          </SpotlightCard>
        ))}
      </section>
    </Page>
  );
};

export default IconsText;
