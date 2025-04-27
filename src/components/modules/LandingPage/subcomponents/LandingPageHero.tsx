import { videos } from "@/utils/constants";

const LandingPageHero = () => {
  return (
    <section className="hero-section w-full h-[60vh] overflow-hidden relative bg-center bg-no-repeat bg-cover text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos.heroAnimation} type="video/mp4" />
      </video>

      <div className="absolute inset-0  bg-gradient-to-r from-black/70 to-black/15"></div>

      <div className="absolute top-[50%] w-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
        <h1
          className="text-6xl font-bold"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Sell Your Properties Before They're Built!
        </h1>
        <h2
          className="font-montserrat text-3xl font-bold mt-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          We create ultra-realistic 3D visuals that help developers sell faster
          and impress investors.
        </h2>
      </div>
    </section>
  );
};

export default LandingPageHero;
