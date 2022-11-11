import React from "react";
import styles from "./Gallery.module.css";
import { GalleryEntry } from "./interfaces";

export interface GalleryProps {
  entries: GalleryEntry[];
}

function jpgExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return filename.slice(0, index) + ".jpg";
}

export const Gallery: React.FC<GalleryProps> = ({ entries }) => {
  return (
    <div className={styles.root}>
      {entries.map((e) => (
        <img
          className={styles.image}
          key={e.slug}
          src={
            e.thumb
              ? `/gallery/${e.thumb}`
              : `/gallery/thumb_${jpgExtension(e.image)}`
          }
          alt={e.image}
        />
      ))}
    </div>
  );
};
