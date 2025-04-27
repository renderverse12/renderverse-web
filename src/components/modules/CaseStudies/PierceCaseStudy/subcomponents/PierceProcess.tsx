import { images } from "@/utils/constants";

const PierceProcess = () => {
  return (
    <section className="bg-[#111] py-8 space-y-8">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-60"
      >
        Process
      </h2>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-center gap-x-10 text-gray-300/90 font-semibold text-xl px-60">
          <p data-aos="fade-up" data-aos-duration="1000" className="w-1/2 ">
            We began with precise 3D modeling using detailed floor plans to
            ensure spatial accuracy. Interior renderings were created to
            showcase various apartment layouts, helping buyers visualize space
            and design. The surrounding environment was carefully recreated in
            3D to reflect the project's real-world location.
          </p>
          <img
            src={images.pierceProcess1}
            className="h-[25rem]"
            data-aos="zoom-in"
            data-aos-duration="700"
          />
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <img
            src={images.pierceProcess9}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess7}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess6}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess8}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess3}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess4}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-300/90 font-semibold text-xl px-60"
        >
          High-quality renderings of the amenities highlighted the luxury and
          lifestyle features. Material textures and lighting were refined to
          enhance realism and create an engaging presentation. Finally, a
          dynamic walkthrough video provided an immersive preview of the
          development.
        </p>
        <div className="flex items-center justify-center gap-x-5">
          <img
            src={images.pierceProcess10}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess11}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess12}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
          <img
            src={images.pierceProcess13}
            className="h-80"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default PierceProcess;
