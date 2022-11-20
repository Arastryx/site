import { Stack } from "@mui/system";
import React from "react";
import { Card } from "../Common/Gallery/Card";
import { Gallery } from "../Common/Gallery/Gallery";
import { galleryEntries } from "./galleryEntries";

export interface GalleryPageProps {}

export const GalleryPage: React.FC<GalleryPageProps> = ({}) => {
  return (
    <Stack direction="row" gap={4}>
      <Card flex={1} p={2}>
        <Gallery entries={galleryEntries} entryRoute="/gallery/entry" />
      </Card>
      <Card width={500} p={2}>
        Hello, welcome to my gallery
      </Card>
    </Stack>
  );
};
