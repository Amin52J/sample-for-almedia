import styled, { css } from "styled-components";
import NotFoundImage from "@Modules/Error/components/404";

export const ErrorContainer = styled.div`
  flex: 1;

  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      width: 996px;
      max-width: 100%;
      margin: 7rem auto;
      padding: 6rem;
      border-radius: 1rem;
      box-shadow: ${theme.shadows.outset.first};
      background: ${theme.colors.grey[0]};

      &:after {
        display: none;
      }
    }
  `}
`;

export const Image = styled(NotFoundImage)`
  width: 600px;
  max-width: 100%;
  display: block;
  margin: 6rem auto;
`;

export const NotFoundTitle = styled.h1`
  text-align: center;
  font-size: 20px;

  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: 32px;
      padding-top: 4rem;
    }
  `};
`;
