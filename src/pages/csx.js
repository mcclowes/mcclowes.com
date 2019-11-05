import styled from "styled-components";

export const Logo = styled.h1`
  -webkit-text-stroke-width: 1px;
  color: transparent;
  font-family: helvetica;
  font-weight: bolder;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  -webkit-text-stroke-color: #DDA1B7;
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

    &,
    &:hover,
    &:active {
      -webkit-text-stroke-width: 1px;
      color: transparent;
      -webkit-text-stroke-color: #DDA1B7;
    }

    &:hover,
    &:active {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #BB8C9E;
    }
  }
`;