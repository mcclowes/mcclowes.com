import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.h1``;

const Header = () => {
  return (
    <div>
      <HeaderWrapper className="title">Max Clayton Clowes</HeaderWrapper>

      <p>
        <a href="mailto:contact@mcclowes.com">contact@mcclowes.com</a>
      </p>

      <p>
        I am a Product Manager with a diverse software engineering and design
        background. I use my background to get the best out of my developement
        peers, and the best for my developer users. Intuition lead, data backed.
        I've been delivering websites and apps for 10+ years. DoY's Young
        Entrepreneur Award winner as a founder.
      </p>
    </div>
  );
};

export default Header;
