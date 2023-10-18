import React from "react";
import styled, { css } from "styled-components";
import SearchIcon from "@aroundhome/around-kit/icons/Search";
import Modal from "@aroundhome/around-kit/components/Modal/Modal";

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
  padding-top: 2rem;

  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      padding-top: 4rem;
      grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
    }
  `};
`;

export const ImageItem = styled.div`
  width: 162px;
  height: 108px;
  position: relative;
  cursor: pointer;

  ${({ theme }) => css`
    @media screen and ${theme.layout.breakpoints.tablet.min} {
      width: 228px;
      height: 132px;
    }
  `};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  object-fit: cover;
  display: block;
`;

export const ImageIcon = styled(SearchIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.grey[0]};
    position: absolute;
    top: 2rem;
    right: 2rem;
  `};
`;

export const Popup = styled(({ className, ...props }) => (
  <Modal bodyClassName={className} {...props} />
))`
  padding: 0 0 6rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledModal = styled(({ className, ...props }) => (
  <Popup contentClassName={className} {...props} />
))`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    margin: 0;
    border: none;

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      /* Maintaining 4:3 aspect ratio */
      max-height: 838px; /* 768 + 70 for the dialog header height */
      max-width: 1024px;
    }
  `};
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
`;

export const ModalButton = styled.div<{ type: "next" | "prev" }>`
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  position: absolute;
  z-index: 4;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  ${({ theme }) => css`
    height: 40px;
    width: 20px;
    color: ${theme.colors.grey[0]};
    filter: drop-shadow(0 2px 2px ${theme.colors.grey[85]});

    @media screen and ${theme.layout.breakpoints.tablet.min} {
      height: 80px;
      width: 40px;
    }

    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      height: 120px;
      width: 60px;
    }
  `};

  ${({ type }) =>
    type === "next"
      ? css`
          right: 1rem;
        `
      : css`
          left: 1rem;
        `};
`;

export const IndexContainer = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoadMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.green[100]};
    text-decoration: underline;
    cursor: pointer;
    margin: 4rem auto;
    width: fit-content;
  `}
`;

export const ImagesEmptyState = styled.div`
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
