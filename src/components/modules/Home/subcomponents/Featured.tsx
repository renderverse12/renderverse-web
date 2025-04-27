import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <Page styling={"bg-[#111]"}>
      <section className="bg-[#111] py-4">
        <h2 className="text-5xl font-bold text-center text-gray-200 leading-tight mb-6 mt-8 ">
          Featured Projects
        </h2>

        <div className="grid grid-cols-3 h-full gap-x-10">
          {featuredProjects.map((images, index) => (
            <div
              key={index}
              className="relative h-[350px] overflow-hidden group"
            >
              <img
                src={images.src}
                className="absolute inset-0 w-full h-full  rounded-lg shadow-lg object-cover"
              />

              <div className="absolute inset-0 bg-white/0 group-hover:bg-gradient-to-t from-black/70 to-black/30 transition duration-300 ease-in-out flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <h3 className="text-3xl font-bold mb-2 text-white">
                  {images.title}
                </h3>

                <p className="w-72 text-lg  text-white text-center mb-4 font-medium">
                  {images.description}
                </p>

                <Button
                  onClick={() => navigate(images.action)}
                  variant="outline"
                  className="px-4 py-2 mt-2 bg-transparent border-white  text-white hover:bg-none  transition"
                >
                  View Project
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
