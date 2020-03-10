import styled from "styled-components";

export const IndexWrapper = styled.div`
  padding: 1.5em;
`

export const Logo = styled.h1`
  -webkit-text-stroke-color: ${props=>props.theme.colors.black};
  -webkit-text-stroke-width: 1px;
  color: transparent;
  font-family: helvetica;
  font-weight: bolder;
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 0.75em;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  
  a {     
    font-family: helvetica;
    font-weight: bolder;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.25em 0;

    &,
    &:hover,
    &:active {
      -webkit-text-stroke-width: 1px;
      color: transparent;
      -webkit-text-stroke-color: ${props=>props.theme.colors.primary};
    }

    &:hover,
    &:active {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${props=>props.theme.colors.alt};
    }
  }
`;

export const ContentsWrapper = styled.div`
  display: grid;
  grid: auto-flow / 1fr;
  max-width: 600px;
`

export const ContentWrapper = styled.div`
  background: ${props=>props.theme.colors.black};
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 5px;

  -webkit-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);

  h1,
  p {
    color: ${props=>props.theme.colors.primary};
  }

  h1 {
    font-family: helvetica;
    font-weight: bolder;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.25em 0;
    color: transparent;
    margin-bottom: 0.5em;
    -webkit-text-stroke-color: ${props=>props.theme.colors.primary};
    -webkit-text-stroke-width: 1px;
  }
`