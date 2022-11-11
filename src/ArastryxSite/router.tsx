import { createHashRouter, Navigate } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { GalleryPage } from "./GalleryPage";
import { Layout } from "./Layout";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/gallery/entry/:slug",
        element: <EntryPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/gallery" />,
  },
]);
