import { useEffect, useRef } from "react";
import data from "../utils/cardsData";
import ProjectCard from "./ProjectCard";
import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ProjectSection = () => {
  let revealRefs = useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
    if (!revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <section id="projects" className="flex flex-col py-12">
      <h1 className="self-center text-3xl lg:text-4xl py-12 font-bold">
        Contributions
      </h1>
      <div className="flex flex-col px-0 lg:px-24">
        {data.map((i) => (
          <ProjectCard ref={addToRefs} key={i.key} {...i} />
        ))}
      </div>
    </section>
  );
};
