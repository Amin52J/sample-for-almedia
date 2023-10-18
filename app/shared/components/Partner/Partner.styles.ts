import styled, { css } from "styled-components";
import Tag from "@aroundhome/around-kit/components/Tag";
import Button from "@aroundhome/around-kit/components/Button";
import Destination from "@aroundhome/around-kit/icons/Destination";
import { TagsStylesProps } from "./Partner";
import AroundhomePartner from "./AroundhomePartner";

export const LogoArea = styled.div(
  ({ theme }) => css`
    width: 10rem;
    height: 10rem;
    border: 1px solid ${theme.colors.grey[8]};
    border-radius: ${theme.borderRadius.normal};
    display: flex;
    justify-content: center;
    grid-area: Logo;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      width: 25rem;
      height: 25rem;
    }
  `,
);

export const LogoAnchorStyles = styled.a`
  margin: auto;
`;

export const LogoStyles = styled.img(
  ({ theme }) => css`
    object-fit: contain;
    object-position: center;
    width: 9rem;
    height: 9rem;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      width: 24rem;
      height: 24rem;
    }
  `,
);

export const TitleArea = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: end;
  width: 90%;
  grid-area: Title;
`;

export const TitleStyles = styled.a(
  ({ theme }) => css`
    margin-right: 1rem;
    text-decoration: none;
    color: ${theme.colors.grey[100]};
    font-weight: ${theme.typography.fontWeights.medium};
    font-size: ${theme.typography.fontSizes.h4};
    line-height: ${theme.typography.lineHeights.medium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.h3};
      line-height: ${theme.typography.lineHeights.large};
    }
  `,
);

export const TagsArea = styled.div`
  grid-area: Tags;
  margin-bottom: 2rem;
`;

export const BadgesArea = styled.div`
  align-items: center;
  display: flex;
  grid-area: Badges;
`;

export const BadgeLogo = styled(AroundhomePartner)(
  ({ theme }) => css`
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.green[100]};
  `,
);

export const TagsStyles = styled(Tag)<TagsStylesProps>(
  ({ theme, isBadge }) => css`
    && {
      margin-right: 1rem;
      background-color: ${isBadge
        ? theme.colors.green[10]
        : theme.colors.green[20]};
      color: ${theme.colors.green[100]};
      & span {
        font-weight: ${theme.typography.fontWeights.regular};
      }
    }
  `,
);

export const RatingArea = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: start;
  grid-area: Rating;
`;

export const RatingsCountText = styled.div(
  ({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.grey[40]};
  `,
);

export const DescriptionArea = styled.div`
  margin-bottom: 2rem;
  grid-area: Description;
`;

export const DescriptionText = styled.div(
  ({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.large};
    color: ${theme.colors.grey[85]};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.text};
      padding-right: 4rem;
    }
  `,
);

export const DescriptionMore = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const ProfileButtonArea = styled.div`
  grid-area: ProfileButton;
`;

export const StyledProfileButton = styled(Button)`
  display: flex;
  width: 31rem;
`;

export const LocationArea = styled.div(
  ({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.medium};
    color: ${theme.colors.grey[85]};
    display: inline-flex;
    align-items: center;
    align-self: start;
    grid-area: Location;
  `,
);

export const LocationIcon = styled(Destination)`
  margin-right: 1rem;
  width: 4rem;
  height: auto;
`;
