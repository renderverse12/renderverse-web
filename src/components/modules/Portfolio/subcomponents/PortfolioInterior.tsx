import Masonry from "@/blocks/Components/Masonry/Masonry";
import { images } from "@/utils/constants";

const PortfolioInterior = () => {
  const data = [
    { id: 1, image: images.interior18, height: 1500 },
    { id: 2, image: images.interior16, height: 1200 },
    { id: 3, image: images.interior17, height: 1200 },
    { id: 4, image: images.interior15, height: 900 },
    { id: 5, image: images.interior19, height: 1400 },
    { id: 6, image: images.interior20, height: 700 },
    { id: 7, image: images.interior1, height: 1400 },
    { id: 8, image: images.interior2, height: 700 },
    { id: 9, image: images.interior3, height: 700 },
    { id: 0, image: images.interior4, height: 700 },
    { id: 11, image: images.interior5, height: 1300 },
    { id: 12, image: images.interior6, height: 1400 },
    { id: 13, image: images.interior7, height: 1200 },
    { id: 14, image: images.interior8, height: 1200 },
    { id: 15, image: images.interior9, height: 1100 },
    { id: 16, image: images.interior10, height: 1500 },
    { id: 17, image: images.interior11, height: 1100 },
    { id: 18, image: images.interior12, height: 700 },
    { id: 19, image: images.interior13, height: 800 },
    { id: 20, image: images.interior14, height: 800 },
    { id: 21, image: images.interior21, height: 1400 },
    { id: 22, image: images.interior22, height: 750 },
    { id: 23, image: images.interior23, height: 750 },
    { id: 24, image: images.interior24, height: 700 },
    { id: 25, image: images.interior25, height: 1000 },
    { id: 26, image: images.interior26, height: 1000 },
    { id: 27, image: images.interior27, height: 1100 },
    { id: 28, image: images.interior28, height: 1400 },
    { id: 29, image: images.interior29, height: 1000 },
    { id: 30, image: images.interior30, height: 900 },
    { id: 31, image: images.interior31, height: 1600 },
    { id: 32, image: images.interior32, height: 1200 },
    { id: 33, image: images.interior33, height: 1000 },
    { id: 34, image: images.interior34, height: 800 },
    { id: 35, image: images.interior35, height: 700 },
    { id: 36, image: images.interior36, height: 700 },
    { id: 37, image: images.interior37, height: 1100 },
    { id: 38, image: images.interior38, height: 800 },
    { id: 39, image: images.interior39, height: 1000 },
    { id: 40, image: images.interior40, height: 1400 },
    { id: 41, image: images.interior41, height: 700 },
    { id: 42, image: images.interior42, height: 1100 },
    { id: 43, image: images.interior43, height: 800 },
    { id: 44, image: images.interior44, height: 1600 },
    { id: 45, image: images.interior45, height: 800 },
    { id: 46, image: images.interior46, height: 900 },
    { id: 47, image: images.interior47, height: 1000 },
    { id: 48, image: images.interior48, height: 800 },
    { id: 49, image: images.interior49, height: 1000 },
    { id: 50, image: images.interior50, height: 1000 },
    { id: 51, image: images.interior51, height: 1400 },
    { id: 52, image: images.interior52, height: 1000 },
    { id: 53, image: images.interior53, height: 800 },
    { id: 54, image: images.interior54, height: 900 },
    { id: 55, image: images.interior55, height: 1000 },
    { id: 56, image: images.interior56, height: 1300 },
    { id: 57, image: images.interior57, height: 1300 },
  ];
  return (
    <div className="bg-[#111] pb-1.5">
      <Masonry data={data} />
    </div>
  );
};

export default PortfolioInterior;
