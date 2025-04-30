import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { images } from "@/utils/constants";
import { Mail, Phone } from "lucide-react";
import ParallaxSection from "@/components/shared/ParallaxSection";
import TrustedPartners from "../../Home/subcomponents/TrustedPartners";
import CallToAction from "@/components/shared/CallToAction";

const ContactForm = () => {
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
          alt="Contact Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/15" />

        {/* Changed from absolute to relative + padding */}
        <div className="relative z-10 px-4 sm:px-8 md:px-16 py-20">
          <div
            className="flex flex-col md:flex-row gap-y-10 md:gap-x-20 p-6 md:p-10 rounded-xl shadow-xl 
    bg-black/70 md:bg-black/0 
    backdrop-blur-md md:backdrop-blur-none"
          >
            {/* Left Text Block */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold uppercase text-gray-200 leading-snug mb-6">
                Have Questions? <br />
                Our team is ready <br />
                to assist you
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
                GET IN TOUCH WITH US
              </h2>
              <p className="text-center font-semibold text-gray-200/90 text-lg mb-4">
                FILL OUT THE FORM BELOW AND WE'LL GET BACK TO YOU SHORTLY
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    required
                    className="w-full p-3 rounded-md text-black border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    className="w-full p-3 rounded-md text-black border"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="text-sm">
                    Inquiry
                  </label>
                  <select
                    name="inquiryType"
                    className="w-full p-3 rounded-md text-black border cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                required
                className="w-full p-3 rounded-md text-black border"
              />
              <textarea
                name="message"
                placeholder="Message"
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
                {state.submitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Trusted partners section */}
      <ParallaxSection image={images.commercial8} height="h-[40vh]">
        <TrustedPartners />
      </ParallaxSection>

      {/* Call to action */}
      <CallToAction
        tagline="Maximize Your Project's Potential Today!"
        taglineTwo="Unlock new opportunities with us!"
      />
    </>
  );
};

export default ContactForm;
