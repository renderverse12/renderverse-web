import Masonry from "@/blocks/Components/Masonry/Masonry";
import { images } from "@/utils/constants";

const Portfolio3DFloor = () => {
  const data = [
    { id: 1, image: images.FloorPlan1, height: 1400 },
    { id: 2, image: images.FloorPlan2, height: 1000 },
    { id: 3, image: images.FloorPlan3, height: 1200 },
    { id: 4, image: images.FloorPlan4, height: 1000 },
    { id: 5, image: images.FloorPlan5, height: 800 },
    { id: 6, image: images.FloorPlan6, height: 1200 },
    { id: 7, image: images.FloorPlan7, height: 1400 },
    { id: 8, image: images.FloorPlan8, height: 1000 },
    { id: 9, image: images.FloorPlan9, height: 1200 },
    { id: 10, image: images.FloorPlan10, height: 1200 },
    { id: 11, image: images.FloorPlan12, height: 1200 },
    { id: 12, image: images.FloorPlan14, height: 800 },
    { id: 13, image: images.FloorPlan15, height: 800 },
    { id: 14, image: images.FloorPlan11, height: 1300 },
  ];
  return (
    <div className="bg-[#111] pb-1.5">
      <Masonry data={data} />
    </div>
  );
};

export default Portfolio3DFloor;
