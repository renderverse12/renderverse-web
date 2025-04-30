import Page from "@/components/shared/Page";

const CompanyAbout = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-200 leading-tight mb-6"
        >
          About Us
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="mt-4 text-gray-300/90 text-center font-medium sm:font-semibold text-base sm:text-lg md:text-xl"
        >
          Founded with a vision to redefine architectural visualization, Render
          Verse has grown into a trusted partner for real estate developers,
          architects, and investors across the heart of Middle Eastern real
          estate and beyond.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="mt-6 text-gray-300/90 text-center font-medium sm:font-semibold text-base sm:text-lg md:text-xl"
        >
          Our journey began with a commitment to delivering hyper-realistic 3D
          visualizations that bring unbuilt projects to life, helping clients
          bridge the gap between concept and reality.
        </p>
      </section>
    </Page>
  );
};

export default CompanyAbout;
