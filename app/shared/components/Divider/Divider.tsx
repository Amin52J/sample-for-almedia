import React from "react";
import { DividerProps } from "./Divider.d";
import DividerStyles from "./Divider.styles";

const Divider = ({ spacing, top, bottom }: DividerProps) => (
  <DividerStyles spacing={spacing} top={top} bottom={bottom} />
);

export default Divider;
