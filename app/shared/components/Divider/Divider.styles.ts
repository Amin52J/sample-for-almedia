import styled, { css } from "styled-components";
import { DividerProps } from "./Divider.d";

export default styled.div<DividerProps>(
  ({ spacing, top, bottom, theme }) => css`
    border-top: 1px solid ${theme.colors.grey[8]};
    height: 0;
    margin: ${top || spacing || 0}rem 0 ${bottom || spacing || 0}rem 0;
  `,
);
