import styled, { css } from "styled-components";

export const DescriptionText = styled.div`
  line-height: 4rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  img {
    max-width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.green[100]};

    &:hover {
      color: ${({ theme }) => theme.colors.yellow[100]};
    }
  }

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    margin-bottom: 0;
    margin-top: 4rem;
  }
`;

export const DescriptionEmptyState = styled.div`
  padding: 2rem 2rem;
  line-height: 1.5;
  margin-bottom: 4rem;
  margin-top: 2rem;

  ${({ theme }) => css`
    background: ${theme.colors.grey[2]};
    border-radius: ${theme.borderRadius.small};

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin-top: 4rem;
      margin-bottom: 0;
    }
  `};
`;

export const PartnerUspsContainer = styled.ul`
  margin: 2rem 0 4rem;
  padding: 0;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    margin: 4rem 0;
  }
`;

export const PartnerAdvantage = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  height: 4rem;
  padding: 1rem 0;
`;

export const IconInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.success[100]};
  overflow: hidden;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grey[0]};
`;

export const AdvantageText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.text};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
  padding-left: 1rem;
`;
