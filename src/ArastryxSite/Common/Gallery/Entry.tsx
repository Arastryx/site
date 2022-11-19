import React from "react";
import { GalleryEntry } from "./interfaces";
import { Box, Stack, styled } from "@mui/system";

const GalleryImage = styled("img")({
  maxWidth: "calc(100vw - 500px)",
  maxHeight: "90vh",
});

export interface EntryProps {
  entry: GalleryEntry;
}

export const Entry: React.FC<EntryProps> = ({ entry }) => {
  return (
    <Stack direction={{ lg: "row" }}>
      <Box flex={1} textAlign="center">
        <GalleryImage
          src={encodeURI(`/dist/gallery/${entry.image}`)}
          alt={entry.image}
        />
      </Box>
      <Box width={500}>{entry.description}</Box>
    </Stack>
  );
};
