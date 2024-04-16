import { lazy, Suspense, useReducer } from "react";
import {
  SpotLightDispatchContext,
  SpotLightContext,
} from "../context/SpotLight";
import { spotLightReducer } from "../state/spotLightReducer";
import { SpotLightWrapper } from "./SpotLightWrapper";

const SpotLightController = lazy(() => import('./SpotLightController' /* webpackPreload: true */));

export default function SpotLight({ children }) {
  const [val, dispatch] = useReducer(spotLightReducer, {
    isMouseOverIframe: false,
    isSpotLightEnabled: false
  });
  return (
    <SpotLightContext.Provider value={val}>
      <SpotLightDispatchContext.Provider value={dispatch}>
        {children}
        <SpotLightWrapper />
        <Suspense fallback={<div className="animate-pulse" />}>
          <SpotLightController />
        </Suspense>
      </SpotLightDispatchContext.Provider>
    </SpotLightContext.Provider>
  );
}
