/* eslint-disable @next/next/no-img-element */
import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useEffect, useState } from "react";
import image1 from "../public/image1.webp";
import image2 from "../public/image2.webp";

const load = () => {
  if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
    let timeline1 = gsap.timeline();
    timeline1
      .set(".title-inner", { x: "100%" })
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
        trigger: "section",
        pin: true,
        start: "top top",
        scrub: 1,
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
        },
        ">"
      );
  }
};

export const HomeSection = () => {
  let [isLoaded, SetIsLoaded] = useState(false);
  useEffect(() => {
    load();
    SetIsLoaded(true);
  }, []);
  return (
    <section>
      <div className={`loading-wrapper ${isLoaded ? "" : "spinner"}`}>
        <div className="arrow-container animated fadeInDown">
          <div className="arrow-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              className="angle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              ></path>
            </svg>
          </div>
          <div className="arrow-1 animated hinge infinite zoomIn"></div>
        </div>

        <div id="home-content" style={{ display: isLoaded && "grid" }}>
          <div className="title">
            <div className="title-inner">
              <div className="cafe">
                <div className="cafe-inner">Hello, I am a</div>
              </div>
              <div className="about">
                <div className="about-inner">Frontend Developer</div>
                <div className="about-2-inner">Passionate trekkie</div>
              </div>
            </div>
          </div>
          <div className="home-content-image">
            <img
              src={image1.src}
              className="image-1"
              alt="animated vaibhav image"
            />
            <img
              src={image2.src}
              className="image-2"
              alt="vaibhav image after scroll"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
