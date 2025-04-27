import { ReactNode } from "react";

interface ParallaxSectionProps {
  image: string;
  height?: string;
  children?: ReactNode;
}

const ParallaxSection = ({
  image,
  height = "h-screen",
  children,
}: ParallaxSectionProps) => {
  return (
    <section
      className={`${height} bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
