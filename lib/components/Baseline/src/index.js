import { createGlobalStyle } from 'styled-components';
import normalize from 'polished/lib/mixins/normalize';

export const Baseline = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  ${normalize()}

  :root {
    --color: ${({ theme }) => theme.palette.color('black')};
    --background: ${({ theme }) => theme.palette.color('white')};
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  ::selection {
    color: ${({ theme }) => theme.palette.color('white')};
    background: ${({ theme }) => theme.palette.color('brand')};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.palette.color('white')};
    background: ${({ theme }) => theme.palette.color('brand')};
  }

  html, body {
    margin: 0;
    padding: 0;
    outline-width: ${({ theme }) => theme.spacing(1, 'border')};
    outline-color: ${({ theme }) => theme.palette.color('brand')};
    color: var(--color);
    background-color: var(--background);
  }

  html { 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
    text-transform: none;
    letter-spacing: ${({ theme }) => `${theme.font.letterSpacing(theme.constants.BASE_SIZE)};`}
    line-height: ${({ theme }) => `${theme.font.lineHeight(theme.constants.BASE_SIZE)};`}
    font-size: ${({ theme }) => `${theme.font.fontSize(theme.constants.BASE_SIZE)};`}
    font-weight: ${({ theme }) => theme.font.weights.regular};
    font-family: 'Inter', var(--font-sans); 
    font-feature-settings: "calt", "liga", "kern";
  }

  @supports (font-variation-settings: normal) {
    html {
      font-variation-settings: "wght" ${({ theme }) => theme.font.weights.regular}, "slnt" 0;
      font-family: 'Inter var', var(--font-sans); 
    }
  }
`;
