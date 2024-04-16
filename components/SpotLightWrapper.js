import { useContext, useEffect, useRef, useState } from "react";
import { SpotLightContext } from "../context/SpotLight";

export function SpotLightWrapper() {
  const { isMouseOverIframe, isSpotLightEnabled } = useContext(SpotLightContext);
  const [clientPosition, setClientPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const ref = useRef();
  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    setClientPosition({
      clientX,
      clientY,
    });
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        background: isMouseOverIframe
          ? "none"
          : `radial-gradient(circle at ${clientPosition.clientX}px ${clientPosition.clientY}px, #00000000 10px, #000000ee 350px)`,
        display: isSpotLightEnabled ? 'block' : 'none'
      }}
      className={
        "fixed opacity-100 w-full h-full top-0 pointer-events-none left-0"
      }
    ></div>
  );
}
