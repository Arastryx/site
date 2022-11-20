import { Box, styled } from "@mui/system";
import React from "react";

export interface CardProps {}

export const Card = styled(Box)<CardProps>(() => {
  return {
    backgroundColor: "#07020db3",
    borderRadius: 12,
  };
});
