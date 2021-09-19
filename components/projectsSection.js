import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <section id="projects" className="flex flex-col py-12">
      <h1 className=" self-center text-4xl py-12 font-bold">My Work</h1>
      <div className="flex flex-col px-0 lg:px-24">
        
        <ProjectCard src="https://fast.wistia.net/embed/iframe/j2q5f8eew8?videoFoam=true" />
        <ProjectCard src="https://projects.coala.io/GSoC/2018/StatusReport/RaiVaibhav" />
        <ProjectCard src="https://codepen.io/raivaibhav/embed/WNjaqOw?default-tab=result"/>
        {/* <ProjectCard /> */}
      </div>
    </section>
  );
};
