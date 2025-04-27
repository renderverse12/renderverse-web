import { Card } from "@/components/ui/card";
import { landingPageWhy } from "@/utils/constants";
import { CheckCircle } from "lucide-react";

const LandingPageWhy = () => {
  return (
    <section className="py-12 px-6 bg-[#111]">
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-5xl font-bold text-center text-gray-200 leading-tight  my-8 "
      >
        Why Choose Render Verse?
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {landingPageWhy.map((item, idx) => (
          <Card
            key={idx}
            className="p-6 flex items-center space-x-4 shadow-md shadow-gray-300/30 bg-[#111] text-gray-300/90 border-gray-300/90"
          >
            <CheckCircle className="text-[#2176ff]" size={32} />
            <p className="text-lg">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LandingPageWhy;
