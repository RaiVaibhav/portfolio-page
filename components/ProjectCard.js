import React, { useEffect, useState } from "react";
import { ProjectSkills } from "./skillsIcons";
import ProjectIframe from "./projectIFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import Image from "next/image";

const CardActions = ({ referLink, referText, githubLink, className = '' }) => {
  if (!referLink) {
    return;
  }
  return (
    <div className={`flex grid-gap-2 ${className}`} >
      <a
        href={referLink}
        aria-label="visit-page"
        className="flex py-2 px-4 text-md text-center bg-gray-600 rounded-md icon-hover"
      >
        {referText}
      </a>
      {githubLink && (
        <a
          href={githubLink}
          aria-label="visit-github"
          className="flex py-2 px-3 text-md text-center bg-gray-600 rounded-md icon-hover items-center"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      )}
    </div>
  );
};
const ProjectCard = ({
  src,
  heading,
  subheading,
  skills,
  description,
  referLink,
  referText,
  githubLink,
  suffixImage
}) => {
  return (
    <Card>
      <div className="flex justify-items-end flex-col flex-1">
        <div className="flex-1 flex flex-col items-start pb-4 xl:pb-8 xl:text-left pt-4">
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
          {description && <p className="whitespace-pre-line">{description}</p>}
          <br />
          {suffixImage && (
            <Image
              className="rounded-md"
              width={300}
              height={200}
              src={suffixImage}
              alt="suffix"
            />
          )}
        </div>
        <CardActions
          referLink={referLink}
          referText={referText}
          githubLink={githubLink}
          className="hidden xl:flex"
        />
      </div>

      <ProjectIframe src={src} />
      <CardActions
        referLink={referLink}
        referText={referText}
        githubLink={githubLink}
        className="xl:hidden pt-2"
      />
    </Card>
  );
};

ProjectCard.displayName = "ProjectCard";

export default React.memo(
  ProjectCard,
  (prevProps, props) => prevProps.src === props.src
);
