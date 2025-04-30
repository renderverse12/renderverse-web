import { images } from "@/utils/constants";

const AzureHero = () => {
  return (
    <section className="w-full h-[60vh] sm:h-screen relative overflow-hidden bg-center bg-no-repeat bg-cover text-white">
      <img
        src={images.exterior7}
        alt="Azure Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default AzureHero;
