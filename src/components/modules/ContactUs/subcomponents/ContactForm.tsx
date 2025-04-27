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
    if (state.succeeded) {
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <>
      <div className=" w-full h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover text-white">
        <img
          src={images.commercial16}
          className="absolute inset-0 w-full h-full object-container"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-black/80 to-black/15"></div>
        <div className="shadow-lg rounded-lg w-full absolute z-50 -left-[1%] top-[20%]">
          <div className="flex items-start justify-center gap-x-32">
            <div className="">
              <h2 className="text-5xl font-bold leading-normal uppercase text-gray-200">
                Have Questions? <br /> Our team is ready <br />
                to assist you
              </h2>
              <p className="text-center font-semibold flex items-center gap-x-1.5 text-2xl my-4 text-gray-200/90">
                {" "}
                <Phone size={20} className="mt-0.5 font-semibold" />: +92
                337-3146719
              </p>
              <p className="text-center font-semibold flex items-center gap-x-1.5 text-2xl my-4 text-gray-200/90">
                {" "}
                <Mail size={20} className="mt-0.5 font-semibold" />:
                info@therenderverse.com
              </p>
            </div>
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-bold text-center">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-center font-semibold text-xl text-gray-200/90 mb-6">
                FILL OUT THE FORM BELOW AND WE'LL GET BACK TO YOU SHORTLY
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    required
                    className="border p-3 w-full rounded-md text-black"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    required
                    className="border p-3 w-full rounded-md text-black"
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
                  <label htmlFor="phone">Phone Number</label>
                  <div className="flex border rounded-md">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                      className="p-3 w-full outline-none text-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="inquiryType">Inquiry</label>
                  <select
                    name="inquiryType"
                    className="border p-3 w-full rounded-md text-black cursor-pointer"
                  >
                    <option value="General Inquiry" className="cursor-pointer">
                      General Inquiry
                    </option>
                    <option value="Support" className="cursor-pointer">
                      Support
                    </option>
                    <option value="Feedback" className="cursor-pointer">
                      Feedback
                    </option>
                  </select>
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                required
                className="border p-3 w-full rounded-md text-black"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="border p-3 w-full rounded-md text-black"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#2176ff] text-white w-full p-3 rounded-md font-semibold hover:bg-[#1a5bb7]"
              >
                {state.submitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
        {/* <div className="shadow-lg rounded-lg  w-full absolute z-50 top-[38%]">
            <CallToAction />
          </div>
          <div className="shadow-lg rounded-lg  w-full absolute z-50 top-[55%]">
            <TrustedPartners />
          </div> */}
      </div>
      <ParallaxSection image={images.commercial8} height="h-[40vh]">
        <TrustedPartners />
      </ParallaxSection>
      <CallToAction
        tagline="Maximize Your Project's Potential Today!"
        taglineTwo="Unlock new opportunities with us!"
      />
    </>
  );
};

export default ContactForm;
