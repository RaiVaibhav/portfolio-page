import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const homeGsap = () => {
  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
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
