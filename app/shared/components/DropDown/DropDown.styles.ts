import styled, { css } from "styled-components";

export const DropDownHeader = styled.div(
  ({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grey[25]};
    min-height: 8rem;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      display: none;
    }
  `,
);

export const DropDownHeaderText = styled.div(
  ({ theme }) => css`
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    font-weight: ${theme.typography.fontWeights.medium};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
  `,
);

export const DropDownClose = styled.div`
  position: absolute;
  right: 3rem;
`;

export const DropDownBodyStyles = styled.div(
  ({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${theme.colors.grey[0]};
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      position: relative;
    }
  `,
);
