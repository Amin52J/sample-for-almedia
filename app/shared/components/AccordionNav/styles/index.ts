import styled, { css } from "styled-components";

export const AccordionContainer = styled.div``;

export const Accordion = styled.div<{ isActive: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[25]};
  &:last-child {
    border-bottom: none;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      padding-bottom: 2rem;
      cursor: default;
    `};
`;

export const AccordionContent = styled.div``;

export const AccordionHead = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 2rem 1rem 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
`;
