import React from "react";
import { GalleryEntry } from "./interfaces";
import { Box, Stack, styled } from "@mui/system";
import { Card } from "./Card";

interface GalleryImageProps {
  hasHeader?: boolean;
  hasDesc?: boolean;
}

const GalleryImage = styled("img")<GalleryImageProps>(
  ({ hasHeader, hasDesc }) => ({
    maxWidth: `calc(100vw - ${hasDesc ? 500 : 50}px)`,
    maxHeight: `calc(100vh - ${hasHeader ? 220 : 100}px)`,
    minHeight: 500,
  })
);

const ImageHeader = styled("h1")({
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "100%",
    width: "100%",
    left: 0,
    height: 1,
    borderRadius: 2,
    background:
      "linear-gradient(90deg, #fffae900 10%, #fffae9 50%, #fffae900 90%)",
  },
});

export interface EntryProps {
  entry: GalleryEntry;
}

export const Entry: React.FC<EntryProps> = ({ entry }) => {
  return (
    <Stack direction={{ lg: "row" }} gap={4}>
      <Stack flex={1} alignItems="center" gap={2}>
        {entry.name && (
          <Card alignSelf="stretch">
            <ImageHeader>{entry.name}</ImageHeader>
          </Card>
        )}
        <Card flex={1} p={2}>
          <GalleryImage
            src={encodeURI(`/dist/gallery/${entry.image}`)}
            alt={entry.image}
            hasHeader={entry.name != null}
            hasDesc={entry.description != null}
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
