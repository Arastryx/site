import React from "react";
import { GalleryEntry } from "./interfaces";
import styles from "./Entry.module.css";

export interface EntryProps {
  entry: GalleryEntry;
}

export const Entry: React.FC<EntryProps> = ({ entry }) => {
  return (
    <div>
      <img
        className={styles.entry}
        src={encodeURI(`/dist/gallery/${entry.image}`)}
        alt={entry.image}
      />
    </div>
  );
};
