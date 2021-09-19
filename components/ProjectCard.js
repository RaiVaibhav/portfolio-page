import ProjectIframe from "./projectIFrame";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap shadow-lg flex-1 card-height">
      <div className="flex-1">Abc def</div>
      <ProjectIframe src="https://codepen.io/raivaibhav/embed/WNjaqOw?default-tab=result" />
    </div>
  );
};
