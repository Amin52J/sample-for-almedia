import styled, { css } from "styled-components";

export const BackButtonContainer = styled.a<{ isInline?: boolean }>`
  ${({ theme, isInline }) =>
    isInline
      ? css`
          margin-right: 2rem;
          @media screen and ${theme.layout.breakpoints.tablet.min} {
            display: none;
          }
        `
      : css`
          margin-bottom: 2rem;
        `}
  display: inline-flex;
  text-decoration: none;
  align-items: baseline;
  color: ${({ theme }) => theme.colors.green[100]};
`;

export const BackButtonText = styled.span`
  display: inline-block;
  margin-left: 1rem;
`;
