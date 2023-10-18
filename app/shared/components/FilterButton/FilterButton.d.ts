import { DefaultTheme } from "styled-components";

export interface FilterButtonProps {
  title: string;
  isSelected: boolean;
  isDisabled?: boolean;
}

export interface StyledFilterButtonProps {
  theme: DefaultTheme;
  isSelected: boolean;
  isDisabled: boolean;
}
