/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import image2 from "../public/image2.webp";
import { homeGsap } from "../utils/homeGsap";

export const HomeSection = () => {
  let [isLoaded, SetIsLoaded] = useState(false);
  useEffect(() => {
    homeGsap();
    SetIsLoaded(true);
  }, []);
  return (
    <section id="home" className="flex">
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

        <div
          id="home-content"
          style={{ display: isLoaded && "grid" }}
          className="px-8 lg:px-24"
        >
          <div className="title">
            <div className="title-inner flex flex-col gap-2">
              <div className="cafe sm:text-3xl lg:text-4xl">
                <div className="cafe-inner ">Hi, I am Vaibhav</div>
              </div>
              <div className="about sm:text-4xl lg:text-5xl">
                <div className="about-inner">A Frontend Developer</div>
              </div>
              <div className="flex my-1 mx-1 opacity-0 resume">
                <a
                  href="https://drive.google.com/file/d/1Ftmm4AtSsD_s6asKx7eSiJuS_W3Et5pX/view"
                  className="gradient-b hover:bg-gray-700 p-2 text-xs md:text-base text-center rounded-md icon-hover sm:opacity-80"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="home-content-image">
            <img
              src={image2.src}
              className="image-1"
              alt="animated vaibhav image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
