import React from "react";
import { Gallery } from "../Common/Gallery/Gallery";
import { galleryEntries } from "./galleryEntries";

export interface GalleryPageProps {}

export const GalleryPage: React.FC<GalleryPageProps> = ({}) => {
  return <Gallery entries={galleryEntries} entryRoute="/gallery/entry" />;
};
