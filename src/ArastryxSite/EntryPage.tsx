import React from "react";
import { useParams } from "react-router-dom";
import { Entry } from "./Common/Gallery/Entry";
import { galleryEntries } from "./GalleryPage/galleryEntries";

export interface EntryPageProps {}

export const EntryPage: React.FC<EntryPageProps> = ({}) => {
  const { slug } = useParams<{ slug: string }>();

  const target = galleryEntries.find((e) => e.slug === slug);

  if (!target) {
    throw new Error(`Could not find entry with slug ${slug}`);
  }

  return <Entry entry={target} />;
};
