import { images } from "@/utils/constants";

const MinervaHero = () => {
  return (
    <section>
      <div className="flex overflow-hidden">
        <img src={images.minervaHero1} className="h-screen" />
        <img src={images.minervaHero2} className="h-screen" />
        <img src={images.minervaHero4} className="h-screen" />
      </div>
    </section>
  );
};

export default MinervaHero;
