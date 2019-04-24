import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const FooterLinks = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1rem 0;

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
      -webkit-text-stroke-width: 1px;
      color: transparent;
      -webkit-text-stroke-color: #DDA1B7;
    }

    &:hover { opacity: 0.75; }
    &:active { opacity: 0.5; }
  }
`;

const Footer = ({ siteTitle, }) => (
	<FooterLinks>
    <a href="https://personal-sites-web-ring.freddieridell.now.sh/prev">⬅️</a>
    <a href="https://personal-sites-web-ring.freddieridell.now.sh/">Webring</a>
    <a href="https://personal-sites-web-ring.freddieridell.now.sh/next">➡️</a>
    <a href="https://personal-sites-web-ring.freddieridell.now.sh/rand">🔀</a>
  </FooterLinks>
);

Footer.propTypes = {
	siteTitle: PropTypes.any,
};

export default Footer;
