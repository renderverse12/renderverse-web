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
import { images, footerSections } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-black">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex justify-evenly gap-x-20 gap-y-10 px-6 xl:px-0">
            <div className="">
              {/* Logo */}
              <img src={images.RenderVerseLogo} className="h-[20vh]" />
              <p className="text-center  flex items-center gap-x-3  my-4 text-gray-200/90">
                <a
                  href="https://www.instagram.com/therenderverse/?hl=en"
                  target="_blank"
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Instagram color="#111" strokeWidth={2.5} size={20} />
                </a>
                <a
                  href="https://www.facebook.com/people/Render-Verse/61574037102634/"
                  target="_blank"
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
                  className="bg-gray-200 p-1.5 rounded-full"
                  target="_blank"
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
                  className="bg-gray-200 p-1.5 rounded-full"
                >
                  <Youtube color="#111" strokeWidth={2.5} size={20} />
                </a>
              </p>
              <p className="text-center  flex items-center gap-x-1.5  my-4 text-gray-200/90">
                {" "}
                <Phone size={20} className="mt-0.5 " />: +92 337-3146719
              </p>
              <p className="text-center  flex items-center gap-x-1.5  my-4 text-gray-200/90">
                {" "}
                <Mail size={20} className="mt-0.5 " />: info@therenderverse.com
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title} className="flex flex-col items-center mt-10">
                <h6 className="font-semibold text-gray-200 text-center">
                  {title}
                </h6>
                <ul className="mt-6 space-y-4 text-center">
                  {links.map(({ title, location }) => (
                    <li key={title}>
                      <Button
                        variant="link"
                        className="text-gray-300/90 hover:text-gray-300/70"
                        onClick={() => {
                          navigate(location);
                        }}
                      >
                        {title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <p className="text-gray-300/90 py-4 text-center">
            &copy; {new Date().getFullYear()} Render Verse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
