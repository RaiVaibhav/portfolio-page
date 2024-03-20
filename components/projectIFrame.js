import React, { useState } from "react";

function ProjectIframe({ src, key }) {
  let [isLoading, SetisLoading] = useState(false);
  return (
    <div className="flex-1 lg:flex-2 iframe flex" id={`key-frame-${key}`}>
      <iframe
        title={src}
        loading="lazy"
        className={`rounded-md ${isLoading && "invisible"}`}
        src={src}
        onLoad={() => {
          SetisLoading(false);
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
      />
    </div>
  );
}

export default React.memo(
  ProjectIframe,
  (prevProps, nextProps) => prevProps.src === nextProps.src
);
