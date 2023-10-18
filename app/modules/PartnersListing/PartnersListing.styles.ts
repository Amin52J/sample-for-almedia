import styled, { css } from "styled-components";
import Anchor from "@aroundhome/around-kit/components/Anchor";
import CheckMark from "@aroundhome/around-kit/icons/CheckMark";
import Button from "@aroundhome/around-kit/components/Button";
import { SortingListItemProps } from "./PartnersListing.d";

export const paginationFooterStyle = { style: { margin: "auto" } };

export const PartnersListingContainer = styled.div(
  ({ theme }) => css`
    max-width: ${theme.breakpoints.desktopM};
    margin: 0;
    flex: 1;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin: 2rem auto;
      width: calc(100% - 45rem);
    }
  `,
);

export const PartnersListingBox = styled.div(
  ({ theme }) => css`
    box-shadow: none;
    border-radius: 0;
    background: ${theme.colors.grey[0]};
    padding: 0;
    margin-bottom: 10rem;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      padding: 4rem;
      box-shadow: ${theme.shadows.outset.first};
      border-radius: ${theme.borderRadius.normal};
    }
  `,
);

export const PartnersListingHeaderStyles = styled.div<{
  hideOnMobile: boolean;
}>(
  ({ theme, hideOnMobile }) => css`
    padding: 3rem 0 2rem 0;
    display: ${hideOnMobile ? "none" : "flex"};
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.grey[0]};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      padding: 4rem 0 2rem 0;
      display: flex;
      background: transparent;
    }
  `,
);

export const PartnersListingLimitText = styled.div(
  ({ theme }) => css`
    display: none;
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.grey[40]};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      display: inline-flex;
    }
  `,
);

export const PartnerSortingStyles = styled.div(
  ({ theme }) => css`
    justify-self: start;
    display: inline-flex;
    margin-left: 2rem;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      justify-self: end;
      margin-left: 0;
    }
  `,
);

export const SortingTitle = styled.div<{ $isDisabled?: boolean }>(
  ({ theme, $isDisabled }) => css`
    color: ${$isDisabled ? theme.colors.grey[25] : theme.colors.grey[85]};
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
  `,
);

export const SortingListContainer = styled.ul(
  ({ theme }) => css`
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
    padding: 0;
    width: 100%;
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      width: 34rem;
    }
  `,
);

export const SortingListTitle = styled.div(
  ({ theme }) => css`
    padding: 2rem;
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.label};
    line-height: ${theme.typography.lineHeights.small};
    color: ${theme.colors.grey[40]};
  `,
);

export const SortingListItem = styled.li<SortingListItemProps>(
  ({ theme, isChecked }) => css`
    padding: 2rem;
    cursor: pointer;
    background: ${isChecked ? theme.colors.grey[2] : "transparent"};
  `,
);

export const SortingListItemText = styled.div(
  ({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.medium};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-auto-flow: row;
    align-items: center;
    grid-template-areas: "PartnersListingLimitText PartnersListingSorting";
  `,
);

export const PartnerSortingChecked = styled(CheckMark)`
  justify-self: end;
  display: inline-flex;
  width: 3rem;
  height: auto;
`;

export const NoPartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 10rem;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors.grey[85]};
  `}
`;

export const NoPartnersTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.medium};
    font-size: ${theme.typography.fontSizes.h4};
    line-height: ${theme.typography.lineHeights.medium};
    margin-bottom: 2rem;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.h3};
      line-height: ${theme.typography.lineHeights.large};
    }
  `}
`;

export const NoPartnersText = styled.p<{
  hasNoMargin?: boolean;
}>(
  ({ theme, hasNoMargin }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
    margin-top: 0;
    margin-bottom: ${hasNoMargin ? 0 : "6rem"};

    strong {
      font-weight: ${theme.typography.fontWeights.medium};
    }
  `,
);

export const NoPartnersInfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    background-color: ${theme.colors.green[5]};
    border-radius: ${theme.borderRadius.normal};
    width: 390px;
    max-width: 100%;
  `}
`;

export const NoPartnersPhone = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.h4};
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.green[100]};
    text-decoration: none;
    display: block;
    margin-top: 1rem;

    &:hover {
      color: ${theme.colors.green[70]};
    }
  `}
`;

export const NoPartnersLabel = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.label};
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.grey[85]};
    display: block;
    margin: 0;
  `}
`;

export const NoPartnersGreyText = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
    margin: 2rem;
    color: ${theme.colors.grey[40]};
  `}
`;

export const NoPartnersButton = styled(Button)`
  width: 100%;
`;

export const DynamicLinksContainer = styled.div(
  ({ theme }) => css`
    padding: 6rem 0 7rem 0;
    margin-left: 2rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "DynamicLinksTitle"
      "DynamicLinksArea";

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin-left: 0;
    }
  `,
);

export const DynamicLinksTitle = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.typography.fontSizes.h4};
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.medium};
    color: ${theme.colors.grey[85]};
    margin-top: 0;
    margin-bottom: 3rem;
    grid-area: DynamicLinksTitle;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin-bottom: 4rem;
      font-size: ${theme.typography.fontSizes.h3};
      line-height: ${theme.typography.lineHeights.large};
    }
  `,
);

export const DynamicLinksArea = styled.div(
  ({ theme }) => css`
    grid-area: DynamicLinksArea;
    display: grid;
    grid-template-columns: minmax(0, auto);
    justify-content: start;
    grid-column-gap: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: repeat(5, auto);
      grid-auto-flow: column;
    }
  `,
);

export const DynamicLink = styled(Anchor)(
  ({ theme }) => css`
    margin-bottom: 1rem;
    text-align: start;
    
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin-bottom: 2rem;
    }
  `,
);

export const LoaderContainer = styled.div`
  margin: auto;
`;
