"use client";

import { MapProvider } from "../providers/map-provider";
import { Map } from "./components/map";

export default function Index() {
  const apiUrl = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  return (
    <div className="absolute w-full h-full inset-0 overflow-hidden flex">
      <div className="relative h-full w-full">
        <MapProvider apiUrl={apiUrl}>
          <Map />
        </MapProvider>
      </div>
    </div>
  );
}
