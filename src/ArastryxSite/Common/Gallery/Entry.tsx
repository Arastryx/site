import React from "react";
import { GalleryEntry } from "./interfaces";
import { Box, Stack, styled } from "@mui/system";
import { Card } from "./Card";

const GalleryImage = styled("img")({
  maxWidth: "calc(100vw - 500px)",
  maxHeight: "calc(100vh - 150px)",
});

export interface EntryProps {
  entry: GalleryEntry;
}

export const Entry: React.FC<EntryProps> = ({ entry }) => {
  return (
    <Stack direction={{ lg: "row" }} gap={4}>
      <Stack flex={1} alignItems="center">
        <Card flex={1} p={5}>
          <GalleryImage
            src={encodeURI(`/dist/gallery/${entry.image}`)}
            alt={entry.image}
          />
        </Card>
      </Stack>

      {entry.description && (
        <Card width={500} p={2}>
          {entry.description}
        </Card>
      )}
    </Stack>
  );
};
