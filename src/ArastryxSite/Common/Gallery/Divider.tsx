import styled from "@emotion/styled";

export interface DividerProps {}

export const Divider = styled("div")<DividerProps>(({}) => ({
  height: 1,
  background:
    "linear-gradient(90deg, #fffae900 10%, #fffae9 50%, #fffae900 90%)",
}));
