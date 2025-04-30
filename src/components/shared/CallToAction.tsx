import { Button } from "../ui/button";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

interface CallToActionProps {
  taglineKey: string; // Use translation keys instead of direct text
  taglineTwoKey: string; // Use translation keys instead of direct text
}

const CallToAction = ({ taglineKey, taglineTwoKey }: CallToActionProps) => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="text-center py-8 md:py-12 px-4 bg-[#2176ff] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          {t(taglineKey)} {/* Translate tagline using key */}
        </h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">
          {t(taglineTwoKey)} {/* Translate taglineTwo using key */}
        </p>
        <a
          href="https://calendly.com/haseeb-therenderverse/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-[#2176ff] px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors">
            {t("cta.getStarted")} {/* Translate button text */}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
