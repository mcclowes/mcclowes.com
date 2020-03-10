import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import { FooterLinks } from './csx'

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
