import { images } from "@/utils/constants";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  return (
    <div className="bg-black/40 h-[40vh]">
      <h2 className="text-5xl pt-4 font-bold text-gray-200 text-center leading-tight ">
        Trusted Partners
      </h2>

      <Marquee autoFill speed={100}>
        <div className="flex items-center w-full justify-evenly gap-x-20">
          <img src={images.trustedPartnersWhite1} alt="" className="w-[3%]" />
          <img src={images.trustedPartnersWhite2} alt="" className="w-[3%]" />
          <img src={images.trustedPartnersWhite3} alt="" className="w-[5%]" />
          <img src={images.trustedPartnersWhite4} alt="" className="w-[2%]" />
          <img src={images.trustedPartnersWhite5} alt="" className="w-[2%]" />
          <img src={images.trustedPartnersWhite1} alt="" className="w-[3%]" />
          <img src={images.trustedPartnersWhite2} alt="" className="w-[3%]" />
          <img src={images.trustedPartnersWhite3} alt="" className="w-[5%]" />
          <img src={images.trustedPartnersWhite4} alt="" className="w-[2%]" />
          <img src={images.trustedPartnersWhite5} alt="" className="w-[2%]" />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedPartners;
