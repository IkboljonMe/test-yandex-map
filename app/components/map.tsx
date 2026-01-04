"use client";

import { useMap } from "@/providers/map-provider";
import {
  YMap,
  YMapLocationRequest,
} from "@yandex/ymaps3-types/imperative/YMap";
import React, { useMemo, useRef, useState } from "react";
import Loading from "./loading";
import { places } from "../data/big-set";

export const Map = () => {
  const { reactifyApi } = useMap();

  if (!reactifyApi) return <Loading />;

  const {
    YMap,
    YMapListener,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker
  } = reactifyApi;
  const location = {
    center: [69.240073, 41.299496],
    zoom: 12
  }
  return (
    <YMap margin={[20, 20, 20, 20]} location={location} >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      {places.map((place) => (
        <YMapMarker
          key={place.id}
          zIndex={10}
          coordinates={[place.longitude, place.latitude]}
        >
          <div className="-translate-x-1/2 -translate-y-full w-20 h-20">
            <img
              src="/coffee.svg"
              alt="Coffee"
              className="w-full h-full"
            />
          </div>
        </YMapMarker>
      ))}
    </YMap >
  );
};
