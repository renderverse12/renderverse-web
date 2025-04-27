import { images } from "@/utils/constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const imageList = [
  images.exterior6,
  images.interior18,
  images.exterior8,
  images.whyUsOne,
  images.interior15,
];

const PortfolioHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden ">
      <motion.img
        key={currentImage}
        src={imageList[currentImage]}
        alt="Portfolio Hero"
        className="absolute w-full h-full object-cover bg-bottom"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0  bg-gradient-to-r from-black/80 to-black/20"></div>
      <h2 className="absolute bottom-6 left-8 text-white text-5xl font-openSans font-bold tracking-wider">
        Portfolio
      </h2>
    </div>
  );
};

export default PortfolioHero;
