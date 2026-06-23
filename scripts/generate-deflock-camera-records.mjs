import { writeFileSync } from "node:fs";

const OUTPUT_PATH = new URL("../data/deflock-camera-records.ts", import.meta.url);
const SOURCE_URL = "https://data.dontgetflocked.com/cameras.geojson.gz";
const LIMIT = 1500;

const response = await fetch(SOURCE_URL, {
  headers: { Accept: "application/geo+json, application/json" },
});

if (!response.ok) {
  throw new Error(`Failed to fetch DeFlock camera feed: ${response.status}`);
}

const geojson = await response.json();
if (!geojson || geojson.type !== "FeatureCollection" || !Array.isArray(geojson.features)) {
  throw new Error("Unexpected camera feed format");
}

const records = geojson.features.slice(0, LIMIT).map((feature, index) => {
  const properties = feature.properties ?? {};
  const coordinates = feature.geometry?.coordinates ?? [];
  const [longitude = null, latitude = null] = coordinates;
  const ref = String(properties.ref ?? "Unspecified location");
  const route = ref.split(";").map((part) => part.trim()).filter(Boolean)[0] ?? ref;
  const locationLabel =
    ref !== "Unspecified location"
      ? route
      : latitude !== null && longitude !== null
        ? `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
        : "Coordinates unavailable";

  return {
    id: `df-${index + 1}`,
    osmId: typeof properties.osmId === "number" ? properties.osmId : null,
    osmType: String(properties.osmType ?? "node"),
    brand: String(properties.brand ?? "Unbranded"),
    locationLabel,
    operator: typeof properties.operator === "string" ? properties.operator : null,
    ref,
    route,
    stateHint:
      ref
        .split(";")
        .map((part) => part.trim())
        .find((part) => /^[A-Z]{2}\s+\d/.test(part)) ?? null,
    direction: typeof properties.direction === "number" ? properties.direction : null,
    directions: typeof properties.directions === "string" ? properties.directions : null,
    surveillanceZone:
      typeof properties.surveillanceZone === "string" ? properties.surveillanceZone : null,
    mountType: typeof properties.mountType === "string" ? properties.mountType : null,
    startDate: typeof properties.startDate === "string" ? properties.startDate : null,
    osmTimestamp: typeof properties.osmTimestamp === "string" ? properties.osmTimestamp : null,
    osmVersion: typeof properties.osmVersion === "number" ? properties.osmVersion : null,
    latitude: typeof latitude === "number" ? latitude : null,
    longitude: typeof longitude === "number" ? longitude : null,
    sourceHref:
      typeof properties.osmType === "string" && typeof properties.osmId === "number"
        ? `https://www.openstreetmap.org/${properties.osmType}/${properties.osmId}`
        : "https://www.openstreetmap.org/",
  };
});

const file = `import type { CameraRecord } from "@/lib/types";

export const deflockCameraRecords: CameraRecord[] = ${JSON.stringify(records, null, 2)};
`;

writeFileSync(OUTPUT_PATH, file, "utf8");
console.log(`Wrote ${records.length} camera records to ${OUTPUT_PATH.pathname}`);
