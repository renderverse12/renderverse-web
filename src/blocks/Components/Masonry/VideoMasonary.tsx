import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

interface VideoItem {
  id: string | number;
  height: number;
  video: string; // YouTube link instead of video source
}

interface GridItem extends VideoItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface VideoMasonryProps {
  data: VideoItem[];
}

function VideoMasonry({ data }: VideoMasonryProps) {
  const [columns, setColumns] = useState<number>(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <VideoWithControls key={item.id} style={style} videoSrc={item.video} />
      ))}
    </div>
  );
}

export default VideoMasonry;

// 🔻 Updated VideoWithControls to use iframe for YouTube videos
const VideoWithControls = ({
  videoSrc,
  style,
}: {
  videoSrc: string; // This is now a YouTube link
  style: any;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnd = () => {
    setIsPlaying(false); // reset button to play icon
  };

  const Div = a.div as any;

  return (
    <Div style={style} className="absolute p-[5px]">
      <div className="relative w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${
            videoSrc.split("v=")[1]
          }?autoplay=${isPlaying ? 1 : 0}`}
          className="w-full h-full rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onEnded={handleVideoEnd}
        />
      </div>
    </Div>
  );
};
