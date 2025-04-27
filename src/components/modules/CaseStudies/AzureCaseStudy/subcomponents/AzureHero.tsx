import { images } from "@/utils/constants";

const AzureHero = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover text-white">
      <img
        src={images.exterior7}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default AzureHero;
