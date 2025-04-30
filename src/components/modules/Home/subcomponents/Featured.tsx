import { images } from "@/utils/constants"; // Import image paths
import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Fetch translated featured projects data
  const featuredProjects: Array<{
    title: string;
    description: string;
    action: string;
    src?: string;
  }> = t("featuredProjects.projects", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
    action: string;
    src?: string;
  }>;

  return (
    <Page styling="bg-[#111]">
      <section className="bg-[#111] py-10 px-4 sm:px-6 lg:px-12 xl:px-20 w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-200 leading-tight mb-10">
          {t("featuredProjects.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden group rounded-lg shadow-lg"
            >
              {/* Use imagePaths constant to map the src */}
              <img
                src={images[project.src as keyof typeof images]} // Map to the correct image path
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-white/0 group-hover:bg-gradient-to-t from-black/80 to-black/40 transition duration-300 ease-in-out flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-white font-medium mb-3 max-w-xs">
                  {project.description}
                </p>

                <Button
                  onClick={() => navigate(project.action)}
                  variant="outline"
                  className="px-4 py-2 bg-transparent border-white text-white hover:bg-white/10 transition text-sm"
                >
                  {t("featuredProjects.viewProject")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Featured;
