import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  //background: ${props => props.theme.colors.primary};
  background: linear-gradient(
    65deg,
    ${props => props.theme.colors.primary} 50%,
    #885c6c 100%
  );
  /*background: linear-gradient(
    90deg,
    ${props => props.theme.colors.black} 50%,
    ${props => props.theme.colors.primary} 100%
  );*/
  display: flex;
  //justify-content: space-between;
  //flex-direction: row;
  flex-direction: column;

  /*// spots
  background: ${props => props.theme.colors.primary};
  background-image: radial-gradient(${props =>
    props.theme.colors.black} 5%, transparent 5%);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;*/
`;
