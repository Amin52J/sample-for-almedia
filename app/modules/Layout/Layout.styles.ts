import styled, { css } from "styled-components";
import Button from "@aroundhome/around-kit/components/Button/Button";
import Rating from "react-rating";

export const PageContainer = styled.div<{
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
}>`
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  width: 100%;

  ${({ theme, noPaddingBottom, noPaddingTop }) => css`
    ${noPaddingBottom
      ? css`
          display: none;
          @media screen and ${theme.layout.breakpoints.tablet.min} {
            padding: 2rem 4rem 0;
            flex: initial;
            display: flex;
          }
        `
      : ""};
    ${noPaddingTop
      ? css`
          @media screen and ${theme.layout.breakpoints.tablet.min} {
            padding: 0 0 7rem;
          }
        `
      : ""};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      max-width: 996px;
      flex-direction: row;
      ${!noPaddingBottom && !noPaddingTop
        ? css`
            padding: 7rem 0;
          `
        : ""};
      ${noPaddingBottom
        ? css`
            padding: 7rem 0 0;
          `
        : ""};
    }
  `}
`;

export const InformationColumn = styled.div<{ hideOnMobile?: boolean }>`
  padding: 4rem 2rem;

  ${({ theme, hideOnMobile }) => css`
    ${hideOnMobile &&
    css`
      display: none;

      @media screen and ${theme.layout.breakpoints.tablet.min} {
        display: initial;
        padding: 4rem;
      }
    `}

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      width: 180px;
      margin-right: 3rem;
      padding: 0;
    }
  `};
`;

export const InformationColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      display: block;
      margin-top: 0;
    }
  `}
`;

export const CardColumn = styled.div<{ noPaddingTop?: boolean }>`
  flex: 1;
  padding: 4rem 2rem 5rem;
  position: relative;

  ${({ theme, noPaddingTop }) => css`
    &:before {
      content: "";
      background: ${theme.colors.green[10]};
      height: 10rem;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      padding: ${noPaddingTop ? "1rem" : "4rem"} 4rem 5rem;

      &:before {
        display: none;
      }

      &:after {
        content: "";
        width: calc(100% + 4rem);
        height: 1rem;
        background: ${theme.colors.grey[25]};
        position: absolute;
        bottom: 1rem;
        left: -4rem;
      }
    }

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      padding: 6rem;
      margin-left: 3rem;
      border-radius: 1rem;
      box-shadow: ${theme.shadows.outset.first};
      background: ${theme.colors.grey[0]};

      &:after {
        display: none;
      }
    }
  `}
`;

export const CardColumnHeader = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1rem;
  flex-direction: column;
  text-align: center;
  align-items: center;

  ${({ theme }) => css`
    &:after {
      content: "";
      width: calc(100% + 6rem);
      height: 1rem;
      background: ${theme.colors.grey[25]};
      position: absolute;
      bottom: 1rem;
      left: -4rem;
    }

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      flex-direction: row;
      text-align: initial;
      align-items: initial;
    }

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      border: none;
      &:after {
        display: none;
      }
    }
  `}
`;

export const CompanyLogo = styled.img<{
  isSmall?: boolean;
  showOnDesktop?: boolean;
}>`
  ${({ theme, isSmall, showOnDesktop }) => css`
    margin-bottom: 2rem;

    ${showOnDesktop &&
    css`
      display: none;
    `};

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      margin-bottom: 0;
    }

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin-bottom: 5rem;
      ${showOnDesktop &&
      css`
        display: initial;
      `}
    }
    background: ${theme.colors.grey[0]};
    border: 1px solid ${theme.colors.grey[8]};
    border-radius: ${theme.borderRadius.small};
    width: 180px;
    height: 180px;
    object-fit: scale-down;
    ${isSmall &&
    css`
      width: 80px;
      height: 80px;
      margin-right: 2rem;
    `};
  `};
`;

export const LogoContainer = styled.div<{ hideOnDesktop?: boolean }>`
  ${({ theme, hideOnDesktop }) => css`
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      ${hideOnDesktop &&
      css`
        display: none;
      `}
    }
  `};
`;

export const InfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.grey[40]};
  font-size: 12px;
  margin: 1rem 0;
  display: block;
`;

export const InfoText = styled.span<{ bold?: boolean }>`
  color: ${({ theme }) => theme.colors.grey[100]};
  margin: 1rem 0 4rem;
  display: block;
  word-break: break-all;
  line-height: 1.5;
  font-weight: ${({ bold, theme }) =>
    bold ? theme.typography.fontWeights.medium : "initial"};
  text-decoration: none;
`;

export const CompanyTitle = styled.h1<{ hideOnDesktop?: boolean }>`
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  margin: 0;
  font-size: 20px;

  ${({ theme, hideOnDesktop }) => css`
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      ${hideOnDesktop &&
      css`
        display: none;
      `}
      font-size: ${theme.typography.fontSizes.h1}
    }
  `};
`;

export const ContactButton = styled(Button)<{ target?: string }>`
  width: initial;
  display: inline-block;

  ${({ theme }) => css`
    && {
      background: transparent;
      box-shadow: 0 0 0 1px ${theme.colors.green[100]};
      border: 1px solid ${theme.colors.green[100]};
      margin: 4rem 0 4rem 0;

      &:last-child {
        margin-right: 0;
      }

      & > div {
        padding: 0 2rem;
        height: 100%;
      }

      @media screen and ${theme.layout.breakpoints.tablet.min} {
        margin: 4rem 6rem 4rem 0;
      }

      @media screen and ${theme.layout.breakpoints.desktopS.min} {
        background: ${theme.colors.grey[0]};
        margin: 4rem 2rem 4rem 0;

        & > div {
          padding: 0 3rem;
        }
      }
    }
  `}
`;

export const InfoSection = styled.div``;

export const CompanyInfoSection = styled.div``;

export const CategoryTagsContainer = styled.div`
  margin-top: 1rem;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    margin-top: 0;
  }
`;

export const ButtonsContainer = styled.div`
  min-height: 6rem;
  display: flex;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    min-height: unset;
  }
`;

export const HorizontalNavContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grey[25]};
    display: none;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      display: block;
    }
  `};
`;

export const CategoryTag = styled.span(
  ({ theme }) => css`
    display: inline-block;
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.green[70]};
    background: ${theme.colors.green[5]};
    border-radius: ${theme.borderRadius.small};
    padding: 0.5rem 1rem;
    margin-right: 1rem;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.label};
      line-height: ${theme.typography.lineHeights.large};
    }
  `,
);

export const HideOnMobile = styled.div(
  ({ theme }) => css`
    display: none;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      display: block;
    }
  `,
);

export const HideOnDesktop = styled.div(
  ({ theme }) => css`
    display: block;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      display: none;
    }
  `,
);

export const AggregateRatingsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  @media screen and ${({ theme }) => theme.layout.breakpoints.tablet.min} {
    justify-content: flex-start;
  }
`;

export const AggregateRatingsText = styled.span(
  ({ theme }) => css`
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.grey[40]};

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      font-size: ${theme.typography.fontSizes.small};
      line-height: ${theme.typography.lineHeights.small};
    }
  `,
);

export const Tag = styled.span(
  ({ theme }) => css`
    font-size: ${theme.typography.fontSizes.label};
    line-height: ${theme.typography.lineHeights.small};
    color: ${theme.colors.grey[40]};
    border: 1px solid ${theme.colors.grey[25]};
    border-radius: ${theme.borderRadius.small};
    padding: 0 0.5rem;

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      padding: 1px 1rem;
    }
  `,
);

export const RatingTextItem = styled.span`
  display: none;

  @media screen and ${({ theme }) => theme.layout.breakpoints.tablet.min} {
    display: inline-block;
  }
`;

export const Star = styled.img`
  object-fit: contain;
  width: 3rem;
  height: 3rem;

  @media screen and ${({ theme }) => theme.layout.breakpoints.tablet.min} {
    width: 2rem;
    height: 2rem;
  }
`;

export const RatingStarsContainer = styled.div`
  display: inline-flex;
  min-width: fit-content;
  margin-right: 1rem;
  height: 4rem;
  align-items: center;
`;

export const StyledRating = styled(Rating)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.yellow[100]};

  & > span:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const AggregateRatingsLink = styled.a<{ hideRatingComments: boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  pointer-events: ${({ hideRatingComments }) =>
    hideRatingComments ? "none" : "initial"};
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Street = styled.span`
  flex: 1 100%;
`;

export const ZipCode = styled.span``;
