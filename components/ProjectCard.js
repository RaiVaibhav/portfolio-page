import projectIFrame from "./projectIFrame";
import ProjectIframe from "./projectIFrame";

export const ProjectCard = ({ src }) => {
  return (
    <div className="flex mb-16 p-12 project-card-bg-color flex-col lg:flex-row flex-wrap shadow-2xl flex-1 card-height container mx-auto shadow-lg rounded-md justify-center items-center">
      <div className="flex-1">Abc def</div>
      <ProjectIframe src={src} />
    </div>
  );
};
