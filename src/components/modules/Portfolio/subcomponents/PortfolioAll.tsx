import Masonry from "@/blocks/Components/Masonry/Masonry";
import { images } from "@/utils/constants";

const data = [
  { id: 1, image: images.commercial15, height: 1500 },
  { id: 2, image: images.commercial13, height: 800 },
  { id: 3, image: images.interior8, height: 1000 },
  { id: 4, image: images.exterior1, height: 1500 },
  { id: 5, image: images.interior1, height: 1200 },
  { id: 6, image: images.commercial16, height: 900 },
  { id: 7, image: images.exterior13, height: 1000 },
  { id: 8, image: images.exterior8, height: 1000 },
  { id: 9, image: images.exterior12, height: 900 },
  { id: 10, image: images.commercial18, height: 600 },
  { id: 11, image: images.commercial14, height: 900 },
  { id: 12, image: images.aerial1, height: 1000 },
  { id: 13, image: images.interior46, height: 900 },
  { id: 14, image: images.interior10, height: 1000 },
  { id: 15, image: images.FloorPlan7, height: 1100 }, //3d floor plan
  { id: 16, image: images.interior58, height: 1000 },
  { id: 29, image: images.aerial3, height: 900 },
  { id: 17, image: images.FloorPlan3, height: 1100 }, //3d floor plan
  { id: 18, image: images.interior19, height: 1400 },
  { id: 19, image: images.FloorPlan12, height: 1300 }, //3d floor plan
  { id: 20, image: images.interior60, height: 900 },
  { id: 21, image: images.interior40, height: 1300 },
  { id: 22, image: images.interior2, height: 800 },
  { id: 23, image: images.interior61, height: 1200 },
  { id: 24, image: images.whyUsOne, height: 1200 },
  { id: 28, image: images.aerial2, height: 900 },
  { id: 25, image: images.interior55, height: 1100 },
  { id: 26, image: images.interior20, height: 800 },
  { id: 27, image: images.interior38, height: 800 },
  { id: 30, image: images.interior47, height: 1100 },
  { id: 31, image: images.interior54, height: 900 },
  { id: 34, image: images.aerial4, height: 1200 },
  { id: 35, image: images.interior30, height: 800 },
];

const PortfolioAll = () => {
  return (
    <div className="bg-[#111] pb-1.5">
      <Masonry data={data} />
    </div>
  );
};

export default PortfolioAll;
