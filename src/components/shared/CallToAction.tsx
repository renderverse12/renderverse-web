import { Button } from "../ui/button";

interface CallToActionProps {
  tagline: string;
  taglineTwo: string;
}

const CallToAction = ({ tagline, taglineTwo }: CallToActionProps) => {
  return (
    <section className="text-center py-12 bg-[#2176ff] text-white">
      <h2 className="text-3xl font-bold mb-4">{tagline}</h2>
      <p className="text-lg mb-6">{taglineTwo}</p>
      <a
        href="https://calendly.com/haseeb-therenderverse/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-white text-[#2176ff] px-6 py-3 font-bold">
          Get Started Now
        </Button>
      </a>
    </section>
  );
};

export default CallToAction;
