import Masonry from "@/blocks/Components/Masonry/Masonry";
import { images } from "@/utils/constants";

const PortfolioCommercial = () => {
  const data = [
    { id: 18, image: images.commercial18, height: 700 },
    { id: 1, image: images.commercial6, height: 1200 },
    { id: 14, image: images.commercial14, height: 800 },
    { id: 2, image: images.commercial2, height: 900 },
    { id: 16, image: images.commercial16, height: 800 },
    { id: 15, image: images.commercial15, height: 1600 },
    { id: 3, image: images.commercial3, height: 800 },
    { id: 4, image: images.commercial4, height: 1600 },
    { id: 5, image: images.commercial5, height: 1000 },
    { id: 13, image: images.commercial13, height: 800 },
    { id: 6, image: images.commercial7, height: 800 },
    { id: 7, image: images.commercial1, height: 1000 },
    { id: 8, image: images.commercial8, height: 1300 },
    { id: 23, image: images.commercial23, height: 800 },
    { id: 9, image: images.commercial9, height: 1000 },
    { id: 10, image: images.commercial10, height: 800 },
    { id: 11, image: images.commercial11, height: 1200 },
    { id: 12, image: images.commercial12, height: 800 },
    { id: 17, image: images.commercial17, height: 800 },
    { id: 19, image: images.commercial19, height: 700 },
    { id: 20, image: images.commercial20, height: 700 },
    { id: 22, image: images.commercial22, height: 700 },
  ];
  return (
    <div className="bg-[#111] pb-1.5">
      <Masonry data={data} />
    </div>
  );
};

export default PortfolioCommercial;
