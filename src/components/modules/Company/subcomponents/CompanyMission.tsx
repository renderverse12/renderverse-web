import Page from "@/components/shared/Page";

const CompanyMission = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="py-8 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-4xl sm:text-5xl font-bold text-center text-gray-200 leading-tight mb-6 mt-8"
        >
          Our Mission
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-gray-300/90 font-semibold text-lg sm:text-xl mt-2 text-center"
        >
          To empower real estate and architectural professionals with
          cutting-edge 3D visualization solutions, enabling them to sell
          off-plan properties, secure investments, and enhance marketing
          strategies with clarity and confidence.
        </p>
      </section>
    </Page>
  );
};

export default CompanyMission;
