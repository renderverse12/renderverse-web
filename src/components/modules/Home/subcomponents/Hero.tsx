import { videos } from "@/utils/constants";

const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos.heroAnimation} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      <div className="absolute top-[40%] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-100"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Elevate Sales with Visual Excellence
        </h1>
        <h2
          className="font-montserrat text-xl md:text-3xl font-bold mt-6 md:mt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Render verse helps developers sell more with cinematic visuals{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          that turn interest into investment.
        </h2>
      </div>
    </section>
  );
};

export default Hero;