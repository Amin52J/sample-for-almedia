import styled, { css } from "styled-components";

export const NavigationContainer = styled.nav`
  display: none;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    display: flex;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[8]};
`;

export const NavigationListItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-right: 3rem;

    @media screen and ${({ theme }) => theme.layout.breakpoints.tablet.min} {
      margin-right: 4rem;
    }
  }
`;

export const StyledAnchor = styled.a<{ active: boolean }>`
  ${({ theme, active }) => css`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    padding: 2rem 0;
    font-weight: ${theme.typography.fontWeights.regular};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
    color: ${active ? theme.colors.yellow[100] : theme.colors.grey[40]};
    box-shadow: 0 2px 0 0 ${active ? theme.colors.yellow[100] : "transparent"};
    transition: all ${theme.transitions.duration.shorter}
      ${theme.transitions.easing.easeIn};

    &:hover {
      color: ${theme.colors.yellow[100]};
    }
  `}
`;
