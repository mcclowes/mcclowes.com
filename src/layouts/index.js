import React from "react";
import PropTypes from "prop-types";

import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";

// ----------------------------------------------------

// ----------------------------------------------------

const TemplateWrapper = props => (
	<Header
		homepage = { props.location.pathname === "/" }
	>
		<Head />

		{props.children(...props)}

		<Footer />
	</Header>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
