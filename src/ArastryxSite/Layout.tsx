import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <Box p={4}>
      <Outlet />
    </Box>
  );
};
