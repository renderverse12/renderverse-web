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

const footerSections = [
  {
    title: "Services",
    links: [
      { title: "Exterior", location: "/portfolio?tab=exterior" },
      { title: "Interior", location: "/portfolio?tab=interior" },
      { title: "Commercial", location: "/portfolio?tab=commercial" },
      { title: "3D Floor Plans", location: "/portfolio?tab=3d-floor-plan" },
      { title: "Virtual Tour", location: "#virtualTour" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", location: routes.company },
      { title: "Contact", location: routes.contactUs },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms", location: "#" },
      { title: "Privacy", location: "#" },
      { title: "Licenses", location: "#" },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-black">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-0 py-12">
          <div className="flex flex-wrap justify-evenly gap-x-20 gap-y-10">
            {/* Logo & Contact */}
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
                <Phone size={20} /> +92 337-3146719
              </p>
              <p className="flex items-center gap-1.5 my-2 text-gray-200/90">
                <Mail size={20} /> info@therenderverse.com
              </p>
            </div>

            {/* Sections */}
            {footerSections.map(({ title, links }) => (
              <div
                key={title}
                className="w-full sm:w-1/2 md:w-auto flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-0"
              >
                <h6 className="font-semibold text-gray-200 mb-3">{title}</h6>
                <ul className="space-y-4">
                  {links.map(({ title, location }) => (
                    <li key={title}>
                      <Button
                        variant="link"
                        className="text-gray-300/90 hover:text-gray-300/70"
                        onClick={() => navigate(location)}
                      >
                        {title}
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
