import React, { useState } from "react"
import { useInView } from 'react-intersection-observer';

function ProjectIframe({ src }) {
  let [isLoading, SetisLoading] = useState(false);
  let [ref, inView, entry ] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  console.log(inView);

  return (
    <div  className="flex-1 lg:flex-2 iframe flex">
      <iframe
        className="rounded-md"
        ref={ref}
        title={src}
        // style={{ opacity: isLoading ? "0" : "1" }}
        src={inView ? src : undefined}
        onLoad={() => SetisLoading(!isLoading)}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
      />
    </div>
  );
}

export default React.memo(ProjectIframe, (prevProps, nextProps) => prevProps.src === nextProps.src)
