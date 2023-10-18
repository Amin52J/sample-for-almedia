import styled, { css } from "styled-components";

const PartnerCardStyles = styled.div(
  ({ theme }) => css`
    min-height: 14rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    grid-template-rows: 5rem 7rem auto auto auto;
    grid-template-areas:
      "Logo Title"
      "Logo Rating"
      "Tags Tags"
      "Description Description"
      "Location Location";
    &:last-child {
      margin-bottom: 10rem;
    }
    @media screen and ${theme.layout.breakpoints.desktopS.min} {
      min-height: 24rem;
      padding: 0;
      grid-template-columns: 30rem minmax(0, 1fr) 31rem;
      grid-template-rows: 5rem 3rem 2rem 6rem auto;
      grid-template-areas:
        "Logo Title ProfileButton"
        "Logo Rating ProfileButton"
        "Logo Rating Location"
        "Logo Tags Location"
        "Logo Description Location";
    }
  `,
);

export default PartnerCardStyles;
