import styled, { css } from "styled-components";

export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grey[85]};
  margin: 0 0 3rem;
  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      margin: 2rem 0 4rem;
    }
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin: 4rem 0;
    }
  `};
`;

export const InfoRow = styled.div<{ hasExtendedBottomMargin?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  ${({ theme, hasExtendedBottomMargin }) => css`
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      flex-direction: row;
      margin-bottom: ${hasExtendedBottomMargin ? 8 : 4}rem;
    }
  `}
`;

export const InfoColumn = styled.div<{ hideOnMobile?: boolean }>`
  flex: 50%;
  ${({ theme, hideOnMobile }) =>
    hideOnMobile &&
    css`
      display: none;

      @media screen and ${theme.layout.breakpoints.tablet.min} {
        display: initial;
      }
    `}
`;

export const Name = styled.span`
  font-weight: 500;
  display: block;
  margin-bottom: 2rem;
  line-height: 4rem;
`;

export const Label = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.grey[40]};
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Text = styled.span<{ onClick?: any }>`
  display: block;
  margin-bottom: 2rem;
  line-height: 4rem;
  color: ${({ theme }) => theme.colors.grey[100]};
  text-decoration: none;
  word-break: break-all;
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  height: 100%;
  max-width: 100%;
`;
