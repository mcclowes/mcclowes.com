import React from "react";

import styled from "styled-components/macro";

const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <a href="mailto:contact@mcclowes.com">contact@mcclowes.com</a>
      </Container>
    </>
  );
};

export default Footer;
