import { createGlobalStyle, DefaultTheme } from "styled-components";

export default createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey[100]};
    background: ${({ theme }) => theme.colors.grey[2]};
    min-height: 100vh;
    font-weight: 400;
  }

  body, html {
    height: 100%;
    scroll-behavior: smooth;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  div, input, form, header, textarea {
    box-sizing: border-box;
  }

  input, textarea, select {
    font-family: Roboto, sans-serif;
  }

 /* remove the arrows from number inputs*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* stylelint-disable-next-line */
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    /* stylelint-disable-next-line */
    -moz-appearance: textfield;
  }
`;
