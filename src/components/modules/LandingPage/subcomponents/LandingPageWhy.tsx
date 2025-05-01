import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const LandingPageWhy = () => {
  const { t } = useTranslation();
  const reasons: string[] = t("landing.why.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="py-12 px-4 sm:px-6 bg-[#111]">
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-200 leading-tight my-8"
      >
        {t("landing.why.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, idx) => (
          <Card
            key={idx}
            className="p-4 sm:p-6 flex items-start sm:items-center space-x-4 shadow-md shadow-gray-300/30 bg-[#111] text-gray-300/90 border-gray-300/90"
          >
            <CheckCircle className="text-[#2176ff] min-w-[32px]" size={28} />
            <p className="text-base sm:text-lg">{reason}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LandingPageWhy;
