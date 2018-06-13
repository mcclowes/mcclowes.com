import React from "react";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

import Banner from "../Banner";

// ----------------------------------------------------

const Header = props => (
	<div>
		<Navigation { ...props } />

		{props.homepage && <Banner />}

		{props.children}
	</div>
);

Header.propTypes = {
	children: PropTypes.node,
};

// ----------------------------------------------------

export default Header;
