import Image from "next/image";
import Header from "@/component/Header";
import Card from "@/component/card/Card";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ButtonArrow from "@/assets/icons/button-arrow.svg";

import { portfolioProjects } from "@/data/data";

const Projects = () => {
  return (
    <section className="pt-16 lg:px-30">
      <div>
        <Header
          eyebrow="Real World Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiances."
        ></Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-3 mt-10">
          {portfolioProjects.map((project, i) => (
            <Card key={i} className="p-6">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-5">
                {project.title}
              </h3>
              <hr className="border-t-2  border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4 ">
                {project.achievements.map((archive, i) => (
                  <li className="flex gap-2 text-white/50" key={i}>
                    <Image
                      src={CheckCircleIcon}
                      height={15}
                      width={15}
                      alt={archive.title}
                    ></Image>
                    <span className="text-sm md:text-base lg:text-base font-poppins">
                      {archive.title}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-wrap lg:flex-row gap-3 sm:gap-4 lg:justify-between py-6">
                <a href={project.link} className="flex w-full sm:w-auto">
                  <div className="flex items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full rounded-xl font-semibold px-6 shadow-md hover:bg-gray-100 transition-all duration-300">
                    <span className="text-sm md:text-base font-poppins">
                      Visit Live Site
                    </span>
                    <Image
                      src={ButtonArrow}
                      width={15}
                      height={15}
                      alt="Arrow icon"
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                    />
                  </div>
                </a>

                <a href={project.link} className="flex w-full sm:w-auto">
                  <div className="flex items-center justify-center gap-2 bg-white text-gray-950 h-12 w-full rounded-xl font-semibold px-6 shadow-md hover:bg-gray-100 transition-all duration-300">
                    <span className="text-sm md:text-base font-poppins">
                      View Code
                    </span>
                    <Image
                      src={ButtonArrow}
                      width={15}
                      height={15}
                      alt="Code icon"
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                    />
                  </div>
                </a>
              </div>
              <div className="grid grid-cols-1 relative aspect-video -mb-7">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover pt-1 -mb-7"
                  priority={false}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
