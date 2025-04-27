import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-12 px-6 text-center flex flex-col items-center bg-[#111]">
      <h2 className="text-3xl font-bold mb-6 text-gray-200">
        Frequently Asked Questions
      </h2>
      <Accordion type="multiple" className="w-[40vw]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            How do you ensure accuracy in your renders?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-300/90">
            We use architectural blueprints, CAD files, and real-world material
            references, applying advanced lighting and texturing for lifelike
            results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            What sets Render Verse apart from other 3D studios?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-300/90">
            We focus on sales-driven visualization, combining photorealism with
            strategic marketing insights to create visuals that convert
            prospects into buyers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            How does 3D visualization help real estate pre-sales and marketing?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-300/90">
            We craft emotionally compelling visuals that highlight key selling
            points, material finishes, and lighting atmospheres, enhancing buyer
            perception and accelerating off-plan sales.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            What is your typical project workflow?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-300/90">
            Consultation – Understanding goals and design details. 3D Modeling –
            Creating accurate structures. Texturing & Lighting – Enhancing
            realism. Rendering & Post-Production – Finalizing high-quality
            visuals. Delivery & Revisions – Ensuring perfection.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            Do you offer interactive experiences or VR?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-500">
            Yes! We provide 360° virtual tours and immersive walkthroughs,
            enhancing buyer engagement and marketing impact.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            What’s your approach to large-scale projects with multiple phases?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-500">
            We implement a structured pipeline, version control, and iterative
            approvals, ensuring seamless collaboration for phased developments,
            master plans, and large real estate portfolios.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-xl text-left text-gray-300">
            How does your team handle revisions and client feedback?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-left text-gray-500">
            We follow a layered revision system, addressing design refinements
            efficiently while maintaining project timelines, ensuring a smooth
            workflow without compromising quality.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-lg mt-4 font-semibold text-gray-300">
        Have more questions?{" "}
        <a href="contact-us" className="text-[#2176ff] font-normal underline">
          Contact us here
        </a>
      </p>
    </section>
  );
};

export default FAQ;
