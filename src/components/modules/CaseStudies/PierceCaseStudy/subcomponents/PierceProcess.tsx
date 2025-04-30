import { images } from "@/utils/constants";

const PierceProcess = () => {
  return (
    <section className="bg-[#111] py-6 md:py-8 space-y-6 md:space-y-8 px-4 md:px-0">
      {/* Responsive Heading */}
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight py-2 text-center px-4 md:px-60"
      >
        Process
      </h2>

      <div className="flex flex-col gap-y-6 md:gap-y-10">
        {/* Text + Image Section - Stacks on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-10 text-gray-300/90 font-semibold text-base md:text-xl px-4 md:px-60">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2"
          >
            We began with precise 3D modeling using detailed floor plans to
            ensure spatial accuracy. Interior renderings were created to
            showcase various apartment layouts, helping buyers visualize space
            and design. The surrounding environment was carefully recreated in
            3D to reflect the project's real-world location.
          </p>
          <img
            src={images.pierceProcess1}
            className="w-full md:w-auto h-64 md:h-[25rem] object-cover"
            data-aos="zoom-in"
            data-aos-duration="700"
            alt="3D modeling process"
          />
        </div>

        {/* First Image Grid - 2 columns on mobile, more on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 px-4 md:px-0">
          {[
            images.pierceProcess9,
            images.pierceProcess7,
            images.pierceProcess6,
            images.pierceProcess8,
            images.pierceProcess3,
            images.pierceProcess4,
          ].map((img, index) => (
            <div
              key={index}
              className="aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Process step ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Centered Text */}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-gray-300/90 font-semibold text-base md:text-xl px-4 md:px-60"
        >
          High-quality renderings of the amenities highlighted the luxury and
          lifestyle features. Material textures and lighting were refined to
          enhance realism and create an engaging presentation. Finally, a
          dynamic walkthrough video provided an immersive preview of the
          development.
        </p>

        {/* Second Image Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:flex items-center justify-center gap-3 md:gap-x-5 px-4 md:px-0">
          {[
            images.pierceProcess10,
            images.pierceProcess11,
            images.pierceProcess12,
            images.pierceProcess13,
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-48 md:h-80 object-cover"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              alt={`Amenity ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PierceProcess;
