/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";
import image1 from "../public/image1.webp";
import image2 from "../public/image2.webp";
import twitter from "../public/twitter.png";
import github from "../public/github.png";
import email from "../public/email.png";

export default function Home() {
  let [isLoaded, SetIsLoaded] = useState(false);
  useEffect(() => {
    SetIsLoaded(true);
    const load = async () => {
      if (typeof window !== undefined) {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        const Linear = (await import("gsap")).Linear;
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
          scrollTrigger: {
            markers: true,
            trigger: "section",
            pin: true, // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        });

        timeline
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
            "-=5"
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
            "-=3"
          );
      }
    };
    load();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Vaibhav Rai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hello, I am a Frontend Developer" />
        <meta property="og:title" content="Vaibhav" />
        <meta
          property="og:description"
          content="Hello, I am a Frontend Developer"
        />
        <meta
          property="og:image"
          content="https://bafkreih4oi4uguonkhaujiriixrvq2wv2otm62upufiwqgnkrm5fuxgebm.ipfs.dweb.link/"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="500" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="generative viabhav pic" />
        <link
          rel="icon"
          href="https://bafkreih4oi4uguonkhaujiriixrvq2wv2otm62upufiwqgnkrm5fuxgebm.ipfs.dweb.link/"
        />
      </Head>
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
          <nav className="nav-bar">
            <h4 className="flex-1">Vaibhav Rai</h4>
            <div className="icons flex-1">
              <a
                href="https://twitter.com/raivaibhav08"
                rel="noreferrer"
                title="twitter"
                target="_blank"
              >
                {/* <span className="icon twitter" /> */}
                <Image
                  src={twitter}
                  height={30}
                  width={30}
                  alt="twitter"
                  className="icon twitter"
                />
              </a>
              <a
                href="https://github.com/RaiVaibhav"
                rel="noreferrer"
                title="github"
                target="_blank"
              >
                <Image
                  src={github}
                  height={30}
                  width={30}
                  alt="twitter"
                  className="icon github"
                />
              </a>
              <a
                href="mailto: raivaibhav08@gmail.com"
                rel="noreferrer"
                title="email"
              >
                <Image
                  src={email}
                  height={30}
                  width={30}
                  alt="twitter"
                  className="icon email"
                />
              </a>
            </div>
          </nav>
          <div
            id="home-content"
            style={{ display: isLoaded ? "grid" : "none" }}
          >
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
    </>
  );
}
