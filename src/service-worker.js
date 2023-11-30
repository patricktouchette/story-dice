import { build, files, prerendered, version } from "$service-worker";
import { precacheAndRoute } from "workbox-precaching";

const precache_list = [
  "/", // Attention: serves stale index, might not be ideal for your use case.
  ...build,
  ...files,
  ...prerendered,
].map((s) => ({
  url: s,
  revision: version,
}));

precacheAndRoute(precache_list);
