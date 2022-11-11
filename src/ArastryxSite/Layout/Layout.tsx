import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};
