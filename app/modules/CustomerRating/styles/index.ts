import styled, { css } from "styled-components";

export const RatingsTabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const HeadlineRatingContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.green[5]};
    flex: 1 100%;
    margin: 2rem 0 4rem;
    padding: 1.5rem 2.5rem;
    border-radius: ${theme.borderRadius.small};

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      margin: 4rem 0 6rem;
    }
  `,
);

export const HeadlineRatingTotal = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.text};
  margin-right: 2rem;
  line-height: 3rem;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    font-size: ${({ theme }) => theme.typography.fontSizes.h4};
  }
`;

export const CustomerRatingsContainer = styled.div`
  display: flex;
  flex: 1 100%;
  flex-wrap: wrap;
`;

export const RatingCardContainer = styled.div`
  flex: 1 100%;
  margin-bottom: 6rem;
`;

export const RatingCardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const RatingScore = styled.span`
  color: ${({ theme }) => theme.colors.grey[85]};
  font-size: ${({ theme }) => theme.typography.fontSizes.text};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
`;

export const RatingCustomerInfo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grey[40]};
`;

export const RatingDate = styled.span`
  color: ${({ theme }) => theme.colors.grey[40]};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
`;

export const RatingCustomerName = styled(RatingDate)``;

export const RatingCustomerCity = styled(RatingDate)``;

export const RatingCardComment = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 0;
  text-align: left;
`;

export const CommentText = styled.span<{ lineClamp: boolean }>`
  color: ${({ theme }) => theme.colors.grey[85]};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClamp }) => (lineClamp ? 3 : "unset")};
  -webkit-box-orient: vertical;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    -webkit-line-clamp: ${({ lineClamp }) => (lineClamp ? 2 : "unset")};
  }
`;

export const TruncatedComment = styled.div`
  flex: 1 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ToggleComment = styled.span`
  color: ${({ theme }) => theme.colors.green[100]};
  text-decoration: underline;
  text-align: right;
  cursor: pointer;
  margin-top: 1rem;
`;

export const HeadlineRatingScore = styled.span`
  display: inline-flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.grey[100]};
  font-size: ${({ theme }) => theme.typography.fontSizes.text};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    font-size: ${({ theme }) => theme.typography.fontSizes.h4};
  }
`;

export const NoCustomerRatings = styled.div`
  background: ${({ theme }) => theme.colors.grey[2]};
  padding: 2rem;
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media screen and ${({ theme }) => theme.layout.breakpoints.desktopS.min} {
    margin-bottom: 0;
    margin-top: 4rem;
  }
`;
