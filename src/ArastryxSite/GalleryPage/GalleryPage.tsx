import React from "react";
import { Gallery } from "./Gallery/Gallery";
import { galleryEntries } from "./galleryEntries";

export interface GalleryPageProps {}

export const GalleryPage: React.FC<GalleryPageProps> = ({}) => {
  return <Gallery entries={galleryEntries} />;
};
