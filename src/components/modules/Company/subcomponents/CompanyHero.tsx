import { videos } from "@/utils/constants";

const CompanyHero = () => {
  return (
    <section className="hero-section w-full h-[30vh] overflow-hidden relative bg-top bg-no-repeat bg-cover text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos.heroAnimation} type="video/mp4" />
      </video>

      <div className="absolute inset-0  bg-gradient-to-r from-black/80 to-black/15"></div>
    </section>
  );
};

export default CompanyHero;
