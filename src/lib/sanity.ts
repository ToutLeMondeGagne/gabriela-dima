import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const sanityClient = createClient({
  projectId: "fyq61r33",
  dataset: "production_gabriela",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
