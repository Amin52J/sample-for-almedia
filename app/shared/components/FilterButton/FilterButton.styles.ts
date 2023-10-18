import styled, { css } from "styled-components";
import Button from "@aroundhome/around-kit/components/Button";
import { StyledFilterButtonProps } from "./FilterButton.d";

export const StyledFilterButton = styled(Button)<StyledFilterButtonProps>(
  ({ theme, isSelected, isDisabled }) => css`
    && {
      color: ${isSelected ? theme.colors.green[70] : theme.colors.grey[85]};
      border: 1px solid
        ${isSelected ? theme.colors.green[70] : theme.colors.grey[40]};
      background: ${theme.colors.grey[0]};
      box-shadow: none;
      margin-right: 1rem;
      & > div {
        padding: 0 2rem;
      }
      & span {
        font-weight: ${theme.typography.fontWeights.regular};
        font-size: ${theme.typography.fontSizes.small};
        line-height: ${theme.typography.lineHeights.large};
      }

      ${isDisabled
        ? css`
            color: ${theme.colors.grey[40]};
            border: 1px solid ${theme.colors.grey[40]};
          `
        : css`
            &:focus,
            &:hover {
              color: ${theme.colors.grey[85]};
              border: 1px solid ${theme.colors.grey[85]};
            }
          `}

      @media screen and ${theme.layout.breakpoints.desktopS.min} {
        margin-right: 2rem;
        & > div {
          padding: 0 3rem;
        }
        & span {
          font-size: ${theme.typography.fontSizes.text};
          line-height: ${theme.typography.lineHeights.large};
        }
      }
    }
  `,
);

export const ButtonTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-items: center;
`;
