import { Box } from "@mui/system";
import { GalleryEntry } from "../Common/Gallery/interfaces";

export const galleryEntries: GalleryEntry[] = [
  {
    image: "AWolfInAutumn.jpg",
    slug: "a_wolf_in_autumn",
    name: "A Wolf in Autumn",
    description: (
      <Box>
        <p>This is</p>
        <p>A test</p>
      </Box>
    ),
  },
  {
    image: "SUNDERED INFERNO.jpg",
    slug: "sundered_inferno",
    name: "SUNDERED INFERNO",
    description: "This is a test description",
  },
  {
    image: "shards_ab.png",
    slug: "shards",
  },
  {
    image: "The Tower.jpg",
    slug: "the_tower",
  },
  {
    image: "Voidolon.png",
    slug: "voidolon_ref",
  },
];
