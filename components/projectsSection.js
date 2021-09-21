import { useEffect, useRef } from "react";
import data from "../utils/cardsData";
import ProjectCard from "./ProjectCard";
export const ProjectSection = () => {
  return (
    <section id="projects" className="flex flex-col py-12">
      <h1 className="self-center text-3xl lg:text-4xl py-12 font-bold">
        Contributions
      </h1>
      <div className="flex flex-col px-0 p-0 sm:px-12 lg:px-24">
        {data.map((i) => (
          <ProjectCard key={i.key} {...i} />
        ))}
      </div>
    </section>
  );
};
