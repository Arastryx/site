import styled from "@emotion/styled";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import { Link } from "react-router-dom";
import { GalleryEntry } from "./interfaces";

const ImageThumbnail = styled("img")({
  borderRadius: 12,
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    marginTop: -8,
    marginBottom: 8,
  },
});

export interface GalleryProps {
  entries: GalleryEntry[];
  entryRoute: string;
}

function jpgExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return filename.slice(0, index) + ".jpg";
}

export const Gallery: React.FC<GalleryProps> = ({ entries, entryRoute }) => {
  return (
    <Grid container spacing={4} alignItems="center">
      {entries.map((e) => (
        <Grid key={e.slug}>
          <Link to={`${entryRoute}/${e.slug}`}>
            <ImageThumbnail
              src={
                e.thumb
                  ? `/dist/gallery/${e.thumb}`
                  : `/dist/gallery/thumb_${jpgExtension(e.image)}`
              }
              alt={e.image}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
