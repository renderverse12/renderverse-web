import { images } from "@/utils/constants";

const PierceHero = () => {
  return (
    <section className="w-full h-[50vh] sm:h-[70vh] md:h-screen relative bg-center bg-no-repeat bg-contain text-white">
      {/* Main hero image with responsive loading */}
      <img
        src={images.pierceHero1}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Pierce project hero image"
      />

      {/* Optional: Add responsive content overlay if needed */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Add your responsive title/cta here if needed */}
          {/* <h1 className="text-3xl md:text-5xl font-bold">Project Title</h1> */}
        </div>
      </div>
    </section>
  );
};

export default PierceHero;