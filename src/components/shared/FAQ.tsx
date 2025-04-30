import { useTranslation } from "react-i18next"; // Import useTranslation hook
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 text-center flex flex-col items-center bg-[#111]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-gray-200">
        {t("faq.title")} {/* Translate FAQ title */}
      </h2>
      <Accordion type="multiple" className="w-full max-w-4xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q1")} {/* Translate question 1 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-300/90 px-2">
            {t("faq.a1")} {/* Translate answer 1 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q2")} {/* Translate question 2 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-300/90 px-2">
            {t("faq.a2")} {/* Translate answer 2 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q3")} {/* Translate question 3 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-300/90 px-2">
            {t("faq.a3")} {/* Translate answer 3 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q4")} {/* Translate question 4 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-300/90 px-2">
            {t("faq.a4")} {/* Translate answer 4 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q5")} {/* Translate question 5 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-500 px-2">
            {t("faq.a5")} {/* Translate answer 5 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q6")} {/* Translate question 6 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-500 px-2">
            {t("faq.a6")} {/* Translate answer 6 */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-base sm:text-lg md:text-xl text-left text-gray-300 px-2">
            {t("faq.q7")} {/* Translate question 7 */}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base md:text-lg text-left text-gray-500 px-2">
            {t("faq.a7")} {/* Translate answer 7 */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-sm sm:text-base md:text-lg mt-4 font-semibold text-gray-300">
        {t("faq.moreQuestions")}{" "}
        {/* Translate the "Have more questions" text */}
        <a href="contact-us" className="text-[#2176ff] font-normal underline">
          {t("faq.contactUs")} {/* Translate the "Contact us here" text */}
        </a>
      </p>
    </section>
  );
};

export default FAQ;
