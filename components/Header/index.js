import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.h1`
`;

const Header = () => {
  return <div>
    <HeaderWrapper className="title">Mike Clowes</HeaderWrapper>

    <p>
      <a href="mailto:contact@mcclowes.com">contact@mcclowes.com</a>
    </p>

    {/* <p>I am a Product Manager with a diverse software engineering and design background, and experience as a founder of a client-facing business. I've been delivering websites and apps for 10+ years. Duke of York Young Entrepreneur Award winner 2017.</p> */}
  </div>
};

export default Header;
