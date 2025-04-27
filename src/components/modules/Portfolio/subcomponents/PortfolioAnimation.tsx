import VideoMasonry from "@/blocks/Components/Masonry/VideoMasonary";
import { videos } from "@/utils/constants";

const PortfolioAnimation = () => {
  const data = [
    { id: 1, video: videos.walkThroughAnimation1, height: 725 },
    { id: 2, video: videos.walkThroughAnimation2, height: 725 },
    { id: 3, video: videos.walkThroughAnimation3, height: 725 },
    { id: 4, video: videos.walkThroughAnimation4, height: 725 },
    { id: 5, video: videos.walkThroughAnimation5, height: 725 },
  ];
  return (
    <div className="bg-[#111] pb-1.5">
      <VideoMasonry data={data} />
    </div>
  );
};

export default PortfolioAnimation;
