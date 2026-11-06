/**
 * Photos used across the site.
 *
 * Stock photos for the pitch only — swap for real LJF job photos before launch.
 * Keep the same keys so components don't need to change; just replace `src`
 * (and `alt`). Photos on livejunkfree.ca and images.unsplash.com are allowed in
 * next.config.ts `images.remotePatterns`.
 */

const UP = "https://livejunkfree.ca/wp-content/uploads/";
const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const LOGO = {
  src: UP + "2024/05/Untitled-design-2.webp",
  width: 350,
  height: 100,
  alt: "Live Junk Free",
} as const;

export const IMG = {
  crew: U("1783473007464-1dbf2ff30dec", 2400), // truck + person carrying furniture
  unload: U("1698917414969-feade59e3343"), // man unloading furniture from truck
  apt: U("1757742690834-aa581b9f53b2"), // empty room, wood floor, big window
  empty2: U("1783125126700-f7426cd71a40"), // empty room, high windows
  job: U("1769972557854-7eae6f95585b"), // man carrying mattress
  boxes: U("1714647211902-bb711d643a17"), // woman with moving boxes
  couple: U("1714647211923-a3881cd1300f"), // couple with boxes in room
  res: U("1714647211902-bb711d643a17"),
  com: U("1577412647305-991150c7d163"), // open-plan office
  demo: U("1784657057386-3285a127dfb7"), // old wooden deck
  clean: U("1709831917664-804b57448953"), // cluttered garage
  bags: U("1781425009053-2baffa997d8c"), // pickup overloaded with bags
  tub: U("1722881445918-75ae564ffced"), // hot tub
  scrap: U("1785900976828-9d67c8b24134"), // scrap metal + bathtub
} as const;

export type ImageKey = keyof typeof IMG;
