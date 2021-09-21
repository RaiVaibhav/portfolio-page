import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const homeGsap = () => {
  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
    let timeline1 = gsap.timeline();
    timeline1
      .set(".title-inner", { x: "100%", delay: 0.3 })
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
      .fromTo(
        ".title-inner",
        {
          x: "100%",
        },
        {
          x: "0%",
          duration: 1,
        }
      )
      .fromTo(
        ".home-content-image img",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
        }
      );
    let timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        pin: true,
        start: "top top",
        scrub: 0.5,
      },
    });
    timeline2
      .to(".arrow-container.animated.fadeInDown", {
        opacity: 0,
        duration: 1,
      })
      .fromTo(
        ".about-inner",
        { y: "0%", opacity: 1 },
        { y: "-100%", duration: 5, ease: Linear.easeInOut, opacity: 0 }
      )
      .fromTo(
        ".image-1",
        { y: "0", opacity: 1 },
        { y: "-100%", duration: 5, ease: Linear.easeInOut, opacity: 0 },
        "<"
      )
      .fromTo(
        ".about-2-inner",
        { y: "0", opacity: 0 },
        { y: "-100%", duration: 3, ease: Linear.easeInOut, opacity: 1 }
      )
      .fromTo(
        ".image-2",
        { y: "100%", opacity: 0 },
        { y: "0%", duration: 3, ease: Linear.easeInOut, opacity: 1 },
        "<"
      )
      .set(
        "nav",
        {
          background: "rgb(35, 35, 35)",
          boxShadow: "rgb(0 0 0 / 5%) 0px 3px 3px",
          duration: 0,
          delay: 0
        },
      )
      .from(
        "#projects",
        {
          y: "0%",
          duration: 0,
          delay: 0
        },
      )
  }
};
