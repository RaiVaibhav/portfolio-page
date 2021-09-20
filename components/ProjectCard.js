import React from "react";
import { ProjectSkills } from "./skillsIcons";
import ProjectIframe from "./projectIFrame";

const ProjectCard = ({ src, heading, subheading, skills }) => {
  return (
    <div className="flex mb-16 pb-12 pl-12 pr-12 pt-4 project-card-bg-color flex-col xl:flex-row flex-wrap shadow-2xl flex-1 card-height container mx-auto shadow-lg rounded-md justify-center">
      <div className="flex-1 text-center flex flex-col xl:items-start items-center pb-4 xl:pb-0 xl:text-left pt-4">
        <ProjectSkills skills={skills} />
        {heading && (
          <div className="text-2xl lg:text-3xl font-bold">
            {heading}
            {subheading && (
              <div className="text-lg pt-2 lg:text-xl font-bold">
                {subheading}
              </div>
            )}
          </div>
        )}
      </div>

      <ProjectIframe src={src} />
    </div>
  );
};

export default React.memo(
  ProjectCard,
  (prevProps, props) => prevProps.src === props.src
);
