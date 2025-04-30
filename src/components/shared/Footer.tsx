import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "../ui/button";
import { images, routes } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const footerSections = [
  {
    title: "services",
    links: [
      { title: "exterior", location: "/portfolio?tab=exterior" },
      { title: "interior", location: "/portfolio?tab=interior" },
      { title: "commercial", location: "/portfolio?tab=commercial" },
      { title: "3dFloorPlans", location: "/portfolio?tab=3d-floor-plan" },
      { title: "virtualTour", location: "#virtualTour" },
    ],
  },
  {
    title: "company",
    links: [
      { title: "aboutUs", location: routes.company },
      { title: "contact", location: routes.contactUs },
    ],
  },
  {
    title: "legal",
    links: [
      { title: "terms", location: "#" },
      { title: "privacy", location: "#" },
      { title: "licenses", location: "#" },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-black">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-0 py-12">
          <div className="flex flex-wrap justify-evenly gap-x-20 gap-y-10">
            {/* Logo & Contact Info */}
            <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-0">
              <img
                src={images.RenderVerseLogo}
                className="h-[20vh] mb-4"
                alt="Logo"
              />
              <div className="flex space-x-3 mb-4">
                <a
                  href="https://www.instagram.com/therenderverse/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Instagram color="#111" strokeWidth={2.5} size={20} />
                </a>
                <a
                  href="https://www.facebook.com/people/Render-Verse/61574037102634/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Facebook
                    color="#111"
                    size={20}
                    fill="#111"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/render-verse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Linkedin
                    color="#111"
                    size={20}
                    strokeWidth={1.5}
                    fill="#111"
                  />
                </a>
                <a
                  href="https://x.com/Render_Verse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Twitter
                    color="#111"
                    size={20}
                    fill="#111"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@TheRenderVerse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Youtube color="#111" strokeWidth={2.5} size={20} />
                </a>
              </div>
              <p className="flex items-center gap-1.5 my-2 text-gray-200/90">
                <Phone size={20} /> {t("footer.contactInfo.phone")}
              </p>
              <p className="flex items-center gap-1.5 my-2 text-gray-200/90">
                <Mail size={20} /> {t("footer.contactInfo.email")}
              </p>
            </div>

            {/* Sections */}
            {footerSections.map(({ title: sectionTitle, links }) => (
              <div
                key={sectionTitle}
                className="w-full sm:w-1/2 md:w-auto flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-0"
              >
                <h6 className="font-semibold text-gray-200 mb-3">
                  {t(`footer.${sectionTitle}.title`)}
                </h6>
                <ul className="space-y-4">
                  {links.map(({ title: linkTitle, location }) => (
                    <li key={linkTitle}>
                      <Button
                        variant="link"
                        className="text-gray-300/90 hover:text-gray-300/70"
                        onClick={() => navigate(location)}
                      >
                        {t(`footer.${sectionTitle}.links.${linkTitle}`)}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-8" />
          <p className="text-gray-300/90 py-4 text-center text-xs">
            &copy; {new Date().getFullYear()} Render Verse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
