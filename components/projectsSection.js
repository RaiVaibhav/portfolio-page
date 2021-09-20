import ProjectCard from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <section id="projects" className="flex flex-col py-12">
      <h1 className=" self-center text-4xl py-12 font-bold">My Work</h1>
      <div className="flex flex-col px-0 lg:px-24">
        <ProjectCard
          heading="Tihatsu"
          key="card-3"
          src="https://nftvisionhack.netlify.app/"
          skills={["react", "css3", "html5"]}
        />
        <ProjectCard
          key="card-1"
          heading="Squadcast"
          subheading="Software Developer intern"
          src="https://fast.wistia.net/embed/iframe/j2q5f8eew8?videoFoam=true"
          skills={["react", "node", "html5", "css3"]}
        />
        <ProjectCard
          heading="GSOC"
          subheading="Student Developer"
          key="card-2"
          src="https://projects.coala.io/GSoC/2018/StatusReport/RaiVaibhav"
          skills={["python", "js"]}
        />
        <ProjectCard
          heading="CSS Only Art Gallery"
          key="card-3"
          src="https://codepen.io/raivaibhav/embed/WNjaqOw?default-tab=result"
          skills={["css3", "html5"]}
        />
      </div>
    </section>
  );
};
