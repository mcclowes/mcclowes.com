import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.h1`
  font-size: 1.2em;
  font-family: sans-serif;
`;

const Header = () => {
  return <HeaderWrapper className="title">mcclowes</HeaderWrapper>;
};

export default Header;
