import Masonry from "@/blocks/Components/Masonry/Masonry";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/constants";

const PortfolioVirtualTour = () => {
  const data = [
    { id: 1, image: images.virtualTour1, height: 800 },
    { id: 2, image: images.virtualTour2, height: 800 },
    { id: 3, image: images.virtualTour3, height: 800 },
    { id: 5, image: images.virtualTour5, height: 800 },
    { id: 6, image: images.virtualTour6, height: 800 },
    { id: 7, image: images.virtualTour7, height: 800 },
  ];
  return (
    <>
      <div className="bg-[#111] pb-1.5">
        <Masonry data={data} />
      </div>
      <div className="flex items-center justify-center pb-1.5">
        <a
          href="https://tour.panoee.net/67d2a35c4b056f7e6ecee26d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link" className=" text-gray-200 text-center">
            View Virtual Tour
          </Button>
        </a>
      </div>
    </>
  );
};

export default PortfolioVirtualTour;
