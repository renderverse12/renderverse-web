import { images } from "@/utils/constants";

const PierceHero = () => {
  return (
    <section className="w-full h-screen  relative bg-center bg-no-repeat bg-contain text-white">
      <img
        src={images.pierceHero1}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default PierceHero;
