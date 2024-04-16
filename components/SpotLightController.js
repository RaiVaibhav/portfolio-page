import { useContext } from "react";
import {
  SpotLightContext,
  SpotLightDispatchContext,
} from "../context/SpotLight";
import Image from "next/image";
import SpotLightControLImage from "../public/spotlight.png";

export default function SpotLightController() {
  const dispatch = useContext(SpotLightDispatchContext);
  const val = useContext(SpotLightContext);
  console.log(val)
  return (
    <div className="sticky bottom-10 float-right mr-10 z-10  hidden md:block">
      <button
        className={` ${
          val.isSpotLightEnabled
            ? "animate-spotLightOn -rotate-45 bg-[#3d3d3d]"
            : "animate-spotLightOff -rotate-180 project-card-bg-color"
        } p-4 rounded-full`}
        onClick={() => {
          dispatch({
            type: "controlSpotLight",
            isSpotLightEnabled: !val.isSpotLightEnabled,
          });
        }}
        aria-label="control spotlight"
      >
        <Image
          src={SpotLightControLImage}
          width={30}
          height={30}
          alt="spotlight controller"
        ></Image>
      </button>
    </div>
  );
}
