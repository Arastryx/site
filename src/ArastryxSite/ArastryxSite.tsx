import React from "react";
import styles from "./ArastryxSite.module.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export interface ArastryxSiteProps {}

export const ArastryxSite: React.FC<ArastryxSiteProps> = ({}) => {
  return <RouterProvider router={router} />;
};
