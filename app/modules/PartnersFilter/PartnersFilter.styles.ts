import styled, { css } from "styled-components";
import Autocomplete from "@aroundhome/around-kit/components/Autocomplete";
import Breadcrumbs from "@aroundhome/around-kit/components/Breadcrumbs";
import RadioGroup from "@aroundhome/around-kit/components/Radio/RadioGroup";
import Divider from "@Shared/components/Divider";
import { ListItemProps } from "./PartnersFilter.d";

export const FilterContainer = styled.div(
  ({ theme }) => css`
    padding: 2rem 2rem 1rem 2rem;
    border-top: 1px solid ${theme.colors.grey[8]};
    border-bottom: 1px solid ${theme.colors.grey[8]};
    background: ${theme.colors.grey[2]};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "FilterSelectors"
      "FilterChips";
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      padding: 4rem;
      min-height: 39rem;
      box-shadow: ${theme.shadows.outset.first};
      border-radius: ${theme.borderRadius.normal};
      background: ${theme.colors.grey[0]};
      grid-template-rows: 4rem 5rem 5rem 8rem 9rem;
      grid-template-areas:
        "FilterNavigation"
        "FilterTitle"
        "FilterDivider"
        "FilterSelectors"
        "FilterChips";
    }
  `,
);

export const FilterDivider = styled(Divider)`
  grid-area: FilterDivider;
`;

export const FilterTitleContainer = styled.div`
  grid-area: FilterTitle;
`;

export const FilterSelectors = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    grid-area: FilterSelectors;
    white-space: nowrap;
    @media screen and ${theme.layout.breakpoints.mobileM.max} {
      overflow-x: scroll;
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `,
);

export const FilterNavMobileWrapper = styled.div(
  ({ theme }) => css`
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.grey[8]};
    background: ${theme.colors.grey[0]};
  `,
);

export const FilterNavigationContainer = styled(Breadcrumbs)(
  ({ theme }) => css`
    && {
      font-size: ${theme.typography.fontSizes.text};
    }
    grid-area: FilterNavigation;
  `,
);

export const FilterTitleText = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.typography.fontWeights.medium};
    font-size: ${theme.typography.fontSizes.h4};
    line-height: ${theme.typography.lineHeights.medium};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.h3};
      line-height: ${theme.typography.lineHeights.large};
    }
  `,
);

export const FilterChipsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    grid-area: FilterChips;
    white-space: nowrap;
    @media screen and ${theme.layout.breakpoints.mobileM.max} {
      overflow-x: scroll;
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `,
);

export const FilterChipsTitle = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.grey[85]};
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.large};
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      font-size: ${theme.typography.fontSizes.text};
    }
  `,
);

export const FilterSelectContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: grid;
    padding: 2rem;
    gap: 2rem;
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      width: 73rem;
    }
  `,
);

export const StyledAutocomplete = styled(Autocomplete)(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    width: calc(100vw - 4rem);
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      width: 69rem;
    }
  `,
);

export const ListContainer = styled.div(
  ({ theme }) => css`
    overflow-y: auto;
    overflow-x: hidden;
    width: calc(100vw - 4rem);
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      max-height: 29rem;
      width: 69rem;
    }
  `,
);

export const List = styled.ul`
  margin: 0;
  margin-block-end: 0;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li<ListItemProps>(
  ({ theme, index, activeIndex }) => css`
    padding: 2rem;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      color: ${theme.colors.green[100]};
      background: ${theme.colors.grey[2]};
    }
    background: ${index === activeIndex ? theme.colors.grey[2] : "transparent"};
  `,
);

export const ImageListItem = styled.li<ListItemProps>`
  display: grid;
  padding: 1rem;
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

export const StickyImage = styled.img(
  ({ theme }) => css`
    background: ${theme.colors.grey[0]};
    justify-self: end;
    width: 13rem;
    height: auto;
  `,
);

export const RadioStyles = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.grey[85]};
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.small};
    line-height: ${theme.typography.lineHeights.large};
    text-decoration: none;
  `,
);

export const RadioGroupStyles = styled(RadioGroup)(
  ({ theme }) => css`
    && {
      margin-top: 2rem;
      & > h4 {
        color: ${theme.colors.grey[85]};
      }
    }
  `,
);
