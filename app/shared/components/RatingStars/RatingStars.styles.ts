import styled from "styled-components";
import Rating from "react-rating";

export const Star = styled.img<{ size: "sm" | "lg" }>`
  object-fit: contain;
  width: ${({ size }) => (size === "sm" ? "2rem" : "3rem")};
  height: ${({ size }) => (size === "sm" ? "2rem" : "3rem")};
`;

export const RatingStarsContainer = styled.div<{ size: "sm" | "lg" }>`
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
