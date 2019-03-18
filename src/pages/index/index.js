import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const Page = styled.div`
	background-color: black;

`;

const Logo = styled.div`
	font-weight: bolder;
	font-family: helvetica;
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #DDA1B7;
	letter-spacing: 0.3rem;
`;

const Links = styled.p`
	font-weight: bolder;
	font-family: helvetica;
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: #DDA1B7;
	letter-spacing: 0.3rem;
`;

const IndexPage = () => (
	<div>
		<Logo>Max Clayton Clowes</Logo>
		
		<Links>
			<a href = "mailto:maxcc@me.com">Email</a><br/>

			<a href = "tel:+44 7976 136 097">Tel</a><br/>

			<a href = "http://bit.ly/maxclaytonclowes">Portfolio</a><br/>

			<a href = "https://www.linkedin.com/in/maxclaytonclowes/">LinkedIn</a><br/>

			<a href = "https://twitter.com/mcclowes">Twitter</a><br/>

			<a href = "https://github.com/mcclowes">Github</a>
		</Links>
	</div>
);

IndexPage.propTypes = {
	
};

export default IndexPage;
