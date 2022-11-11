import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import { GalleryEntry } from "./interfaces";

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
    <div className={styles.root}>
      {entries.map((e) => (
        <Link key={e.slug} to={`${entryRoute}/${e.slug}`}>
          <img
            className={styles.image}
            src={
              e.thumb
                ? `/dist/gallery/${e.thumb}`
                : `/dist/gallery/thumb_${jpgExtension(e.image)}`
            }
            alt={e.image}
          />
        </Link>
      ))}
    </div>
  );
};
