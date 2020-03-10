import styled from "styled-components";

export const FooterLinks = styled.div`
  background: ${props=>props.theme.colors.black};
  padding: 1rem;
  padding-left: 2.5em;

  a {
    color: white;
    text-decoration: none;
    font-family: helvetica;
    font-weight: bolder;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;

    &,
    &:hover,
    &:active {
      -webkit-text-stroke-color: ${props=>props.theme.colors.primary};
      -webkit-text-stroke-width: 1px;
      color: transparent;
    }

    &:hover { opacity: 0.75; }
    &:active { opacity: 0.5; }
  }
`;