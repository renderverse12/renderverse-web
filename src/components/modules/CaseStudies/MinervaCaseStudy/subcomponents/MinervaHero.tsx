import { images } from "@/utils/constants";

const MinervaHero = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row overflow-hidden">
        <img
          src={images.minervaHero1}
          className="h-screen w-full object-cover"
        />
        <img
          src={images.minervaHero2}
          className="h-screen w-full object-cover"
        />
        <img
          src={images.minervaHero4}
          className="h-screen w-full object-cover"
        />
      </div>
    </section>
  );
};

export default MinervaHero;
