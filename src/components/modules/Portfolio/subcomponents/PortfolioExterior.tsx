import Masonry from "@/blocks/Components/Masonry/Masonry";
import { images } from "@/utils/constants";

const PortfolioExterior = () => {
  const data = [
    { id: 8, image: images.exterior8, height: 900 },
    { id: 1, image: images.exterior1, height: 1600 },
    { id: 2, image: images.exterior2, height: 800 },
    { id: 3, image: images.exterior13, height: 1200 },
    { id: 4, image: images.exterior4, height: 800 },
    { id: 5, image: images.exterior5, height: 1600 },
    { id: 6, image: images.exterior6, height: 700 },
    { id: 7, image: images.exterior7, height: 700 },
    { id: 9, image: images.exterior9, height: 1000 },
    { id: 10, image: images.exterior10, height: 1200 },
    { id: 11, image: images.exterior11, height: 1000 },
    { id: 12, image: images.exterior12, height: 1000 },
    { id: 13, image: images.exterior3, height: 1600 },
    { id: 14, image: images.aerial1, height: 1000 },
    { id: 15, image: images.aerial2, height: 900 },
    { id: 16, image: images.aerial3, height: 1000 },
    { id: 17, image: images.aerial4, height: 1100 },
  ];
  return (
    <div className="bg-[#111] pb-1.5">
      <Masonry data={data} />
    </div>
  );
};

export default PortfolioExterior;
