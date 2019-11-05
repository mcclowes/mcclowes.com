import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle, }) => (
	<div
		style = { {
			marginBottom: "1.45rem",
		} }
	 />
);

Header.propTypes = {
	siteTitle: PropTypes.any,
};

export default Header;
