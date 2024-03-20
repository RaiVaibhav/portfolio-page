import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const homeGsap = () => {
  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
    let timeline1 = gsap.timeline();
    timeline1
      .fromTo(
        ".title-inner",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
        }
      )

      .to(".resume", { opacity: 1, ease: Linear.easeIn });
    let timeline3 = gsap.timeline();
    timeline3
      .fromTo(
        ".home-content-image img",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
        }
      )
    let timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        pin: true,
        start: "bottom 20%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    timeline2
      .to("nav", {
        background: "rgb(35, 35, 35)",
        boxShadow: "rgb(0 0 0 / 5%) 0px 3px 3px",
      })
      .to(
        ".arrow-container",
        {
          visibility: "hidden",
        },
        "<"
      );
  }
};
