import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/constants";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <Page styling="bg-[#111]">
      <section className="py-20 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-4xl sm:text-5xl font-bold text-center text-gray-200 leading-tight my-8"
        >
          {t("team.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src={images.Team1}
              alt=""
              className="h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
            <p className="font-bold text-lg text-gray-200 mt-4">
              {t("team.members.0.name")}
            </p>
            <p className="font-bold text-sm text-gray-300/80">
              {t("team.members.0.role")}
            </p>
            <a
              href="https://www.linkedin.com/in/syed-maaz-hussaini-666b40343/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-300/90 mt-2"
              >
                <img src={images.LinkedIn} alt="LinkedIn" className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src={images.Team2}
              alt=""
              className="h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
            <p className="font-bold text-lg text-gray-200 mt-4">
              {t("team.members.1.name")}
            </p>
            <p className="font-bold text-sm text-gray-300/80">
              {t("team.members.1.role")}
            </p>
            <a
              href="https://www.linkedin.com/in/haseeb-hussaini-9a8485222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-300/90 mt-2"
              >
                <img src={images.LinkedIn} alt="LinkedIn" className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src={images.Team3}
              alt=""
              className="h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
            <p className="font-bold text-lg text-gray-200 mt-4">
              {t("team.members.2.name")}
            </p>
            <p className="font-bold text-sm text-gray-300/80">
              {t("team.members.2.role")}
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Team;
