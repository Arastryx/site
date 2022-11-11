import { createHashRouter, Navigate } from "react-router-dom";
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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/gallery" />,
  },
]);
