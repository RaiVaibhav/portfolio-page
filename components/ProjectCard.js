import React from "react";
import { ProjectSkills } from "./skillsIcons";
import ProjectIframe from "./projectIFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({
  src,
  heading,
  subheading,
  skills,
  description,
  referLink,
  referText,
  githubLink,
}) => {
  return (
    <div className="flex mb-16 pb-12 pl-12 pr-12 pt-4 grid-gap-4 project-card-bg-color flex-col xl:flex-row flex-wrap shadow-2xl flex-1 card-height container mx-auto shadow-lg rounded-md justify-center">
      <div className="flex justify-items-end flex-col flex-1">
        <div className="flex-1 flex flex-col items-start pb-4 xl:pb-0 xl:text-left pt-4">
          <ProjectSkills skills={skills} />
          {heading && (
            <div className="text-2xl lg:text-3xl font-bold pb-2">
              {heading}
              {subheading && (
                <div className="text-lg lg:text-xl font-bold pb-4">
                  {subheading}
                </div>
              )}
            </div>
          )}
          {description && <div>{description}</div>}
        </div>
        {referLink && (
          <div className="flex grid-gap-2">
            <a
              href={referLink}
              className="flex py-2 px-4 text-md text-center bg-gray-600 rounded-md icon-hover"
            >
              {referText}
            </a>
            {githubLink && (
              <a
                href={githubLink}
                className="flex py-2 px-3 text-md text-center bg-gray-600 rounded-md icon-hover items-center"
              >
                <FontAwesomeIcon icon={["fab", "github"]}/>
              </a>
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
