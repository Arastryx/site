import React from "react";
import { Gallery } from "./Gallery";
import { galleryEntries } from "./galleryEntries";
import styles from "./ArastryxSite.module.css";

export interface ArastryxSiteProps {}

export const ArastryxSite: React.FC<ArastryxSiteProps> = ({}) => {
  return (
    <div className={styles.root}>
      <Gallery entries={galleryEntries} />
    </div>
  );
};
