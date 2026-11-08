import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.cloud};
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  input, textarea, button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
