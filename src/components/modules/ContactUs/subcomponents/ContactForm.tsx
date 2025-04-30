import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { images } from "@/utils/constants";
import { Mail, Phone } from "lucide-react";
import ParallaxSection from "@/components/shared/ParallaxSection";
import TrustedPartners from "../../Home/subcomponents/TrustedPartners";
import CallToAction from "@/components/shared/CallToAction";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mnnpbdjv");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="w-full min-h-screen relative overflow-hidden bg-center bg-no-repeat bg-cover text-white">
        <img
          src={images.commercial16}
          className="absolute inset-0 w-full h-full object-cover"
          alt={t("contact.altImage")}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/15" />

        <div className="relative z-10 px-4 sm:px-8 md:px-16 py-20">
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 p-6 md:p-10 rounded-xl shadow-xl bg-black/70 md:bg-black/0 backdrop-blur-md md:backdrop-blur-none">
            {/* Left Text Block */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold uppercase text-gray-200 leading-snug mb-6">
                {t("contact.heading")}
              </h2>
              <p className="flex justify-center md:justify-start items-center gap-x-2 text-xl sm:text-2xl text-gray-200/90 mb-3">
                <Phone size={22} /> +92 337-3146719
              </p>
              <p className="flex justify-center md:justify-start items-center gap-x-2 text-xl sm:text-2xl text-gray-200/90">
                <Mail size={22} /> info@therenderverse.com
              </p>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex-1 space-y-4 bg-black/60 md:bg-transparent p-6 rounded-lg md:rounded-none"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                {t("contact.formTitle")}
              </h2>
              <p className="text-center font-semibold text-gray-200/90 text-lg mb-4">
                {t("contact.formSubtitle")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="text-sm">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={t("contact.fullNamePlaceholder")}
                    required
                    className="w-full p-3 rounded-md text-black border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.emailPlaceholder")}
                    required
                    className="w-full p-3 rounded-md text-black border"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm">
                    {t("contact.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("contact.phonePlaceholder")}
                    required
                    className="w-full p-3 rounded-md text-black border"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="text-sm">
                    {t("contact.inquiry")}
                  </label>
                  <select
                    name="inquiryType"
                    className="w-full p-3 rounded-md text-black border cursor-pointer"
                  >
                    <option value="General Inquiry">
                      {t("contact.general")}
                    </option>
                    <option value="Support">{t("contact.support")}</option>
                    <option value="Feedback">{t("contact.feedback")}</option>
                  </select>
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder={t("contact.subjectPlaceholder")}
                required
                className="w-full p-3 rounded-md text-black border"
              />
              <textarea
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
                className="w-full p-3 rounded-md text-black border"
                rows={5}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full p-3 bg-[#2176ff] hover:bg-[#1a5bb7] text-white font-semibold rounded-md transition"
              >
                {state.submitting
                  ? t("contact.submitting")
                  : t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ParallaxSection image={images.commercial8} height="h-[40vh]">
        <TrustedPartners />
      </ParallaxSection>

      <CallToAction
        taglineKey={t("contact.ctaLine1")}
        taglineTwoKey={t("contact.ctaLine2")}
      />
    </>
  );
};

export default ContactForm;
