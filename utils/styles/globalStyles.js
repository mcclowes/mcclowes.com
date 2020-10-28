import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  @media(prefers-color-scheme: light) {
    :root {
      --white: #FFFFFF;
      --primary-light: #8EE3C6;
      --primary: #437868;
      --primary-dark: #2E5A4D;
      --gray: #666;
      --black: #171D1B;
    }
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --white: #18191A;
      --primary-light: #DDA1B7;
      --primary: #DDA1B7;
      --primary-dark: #DDA1B7;
      --gray: #ccc;
      --black: #ffffff;
    }
  }


  html,
  body {
    padding: 0;
    margin: 0;
    color: var(--black);
    background-color: var(--white);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    font-family: avenir next, helvetica, sans-serif;
    color: var(--black);
  }

  h1,
  h2,
  h3,
  h4 {

  }

  h1 {
    margin-bottom: 0;
  }

  h1 + p {
    margin-top: 3px;
  }

  h2 {
    border-bottom: 2px solid var(--black);
    display: flex;
    margin-block-start: 1.2em;
    padding-bottom: 0.3em;
  }

  h3 {
    margin-block-start: 1em; 
    color: var(--primary-dark);
  }

  h3 em {
    font-style: normal;
    font-weight: lighter;
  }

  h4 {
    color: var(--primary-dark);
    font-weight: normal;
  }

  h3,
  h4 {
    margin-block-end: 3px;
  }

  h3 + p,
  h3 + h4,
  h4 + p {
    margin-block-start: 3px;
  }

  a { 
    text-decoration: none;
    color: var(--primary);
  }

  a:hover {
    text-decoration: underline;
    opacity: 0.75;
  }

  em {
    color: var(--gray);
  }

  strong {
    color: var(--primary-dark)
  }

  blockquote {
    color: var(--primary-light);
  }

  hr {
    opacity: 0.2;
  }

  @page {
    margin: 0;
  }

  .pages {
    padding: 1em;
    max-width: 700px;
    page-break-before: always;
    page-break-after: always;
  }

  .page { }

  ul {
    padding-inline-start: 1em;
  }

  h3 + ul {
    padding-inline-start: 0;
    list-style-type: none;
  }
`;
