import { Box, Stack } from "@mui/system";
import React from "react";
import { Card } from "../Common/Gallery/Card";
import { Gallery } from "../Common/Gallery/Gallery";
import { galleryEntries } from "./galleryEntries";
import tinyAras from "./ATinyAras.png";
import { Divider } from "../Common/Gallery";

export interface GalleryPageProps {}

export const GalleryPage: React.FC<GalleryPageProps> = ({}) => {
  return (
    <Stack direction="row" gap={4}>
      <Card flex={1} p={2}>
        <Gallery entries={galleryEntries} entryRoute="/gallery/entry" />
      </Card>
      <Card width={500} p={2}>
        <Box textAlign="center">
          <img src={tinyAras} alt="A Tiny Aras" width={300} />
        </Box>
        <Divider />
      </Card>
    </Stack>
  );
};
