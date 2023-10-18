import { DefaultTheme } from "styled-components";

type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface DividerProps {
  spacing?: Space;
  top?: Space;
  bottom?: Space;
  theme?: DefaultTheme;
}
