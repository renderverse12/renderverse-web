import { images } from "@/utils/constants";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const TrustedPartners = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black/40 h-[55vh] py-4">
      <h2 className="text-5xl font-bold text-gray-200 text-center leading-tight mb-4">
        {t("trustedPartners.title")}
      </h2>

      {/* Mobile: static logos in 2-column grid */}
      <div className="grid grid-cols-2 gap-4 px-4 sm:hidden">
        <img
          src={images.trustedPartnersWhite1}
          alt=""
          className="w-24 h-auto object-contain mx-auto"
        />
        <img
          src={images.trustedPartnersWhite2}
          alt=""
          className="w-24 h-auto object-contain mx-auto"
        />
        <img
          src={images.trustedPartnersWhite3}
          alt=""
          className="w-24 h-auto object-contain mx-auto"
        />
        <img
          src={images.trustedPartnersWhite4}
          alt=""
          className="w-24 h-auto object-contain mx-auto"
        />
        <img
          src={images.trustedPartnersWhite5}
          alt=""
          className="w-24 h-auto object-contain mx-auto"
        />
      </div>

      {/* Desktop & Tablet: marquee */}
      <div className="hidden sm:block h-full">
        <Marquee autoFill speed={100} gradient={false}>
          <div className="flex items-center w-full justify-evenly gap-x-20">
            <img src={images.trustedPartnersWhite1} alt="" className="w-[3%]" />
            <img src={images.trustedPartnersWhite2} alt="" className="w-[3%]" />
            <img src={images.trustedPartnersWhite3} alt="" className="w-[5%]" />
            <img src={images.trustedPartnersWhite4} alt="" className="w-[2%]" />
            <img src={images.trustedPartnersWhite5} alt="" className="w-[2%]" />
            {/* repeat to fill */}
            <img src={images.trustedPartnersWhite1} alt="" className="w-[3%]" />
            <img src={images.trustedPartnersWhite2} alt="" className="w-[3%]" />
            <img src={images.trustedPartnersWhite3} alt="" className="w-[5%]" />
            <img src={images.trustedPartnersWhite4} alt="" className="w-[2%]" />
            <img src={images.trustedPartnersWhite5} alt="" className="w-[2%]" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPartners;
