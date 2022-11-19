import React from "react";

export interface GalleryEntry {
  image: string;
  thumb?: string;
  slug: string;
  name?: string;
  description?: React.ReactNode;
}
