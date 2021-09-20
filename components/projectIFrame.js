import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function ProjectIframe({ src }) {
  let [frameSrc, SetFrameSrc] = useState(undefined);
  let [isLoading, SetisLoading] = useState(false);
  let [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if(inView && !frameSrc) {
      SetisLoading(true)
      SetFrameSrc(src);
    }
  }, [inView, src, frameSrc]);
  return (
    <div className="flex-1 lg:flex-2 iframe flex" ref={ref}>
      <iframe
        className="rounded-md"
        title={src}
        style={{ opacity: isLoading ? "0" : "1" }}
        src={frameSrc}
        onLoad={() => {
          // on viewport change onLoad will gets called again but check if
          // it's already loaded then prevent the state render
          if (isLoading) {
            SetisLoading(!isLoading)
          }
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
      />
      {isLoading && (
        <div className="animate-pulse bg-gray-100 w-full h-full absolute flex items-center justify-center rounded-md">
          <svg
            className="h-16 w-16"
            version="1.1"
            id="L7"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="0%" stopColor="rgba(33,167,201,1)" />
                <stop offset="100%" stopColor="rgba(102,185,22,1)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#MyGradient)"
              d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="url(#MyGradient)"
              d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="url(#MyGradient)"
              d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* <div className="animated-background" /> */}
        </div>
      )}
    </div>
  );
}

export default React.memo(
  ProjectIframe,
  (prevProps, nextProps) => prevProps.src === nextProps.src
);
