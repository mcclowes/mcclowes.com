import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Layout from "../layouts";

const Logo = styled.h1`
	-webkit-text-stroke-width: 1px;
	color: transparent;
	font-family: helvetica;
	font-weight: bolder;
	letter-spacing: 0.3rem;
	text-transform: uppercase;
  -webkit-text-stroke-color: #DDA1B7;
`;

const Links = styled.p`
	a {			
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

		&:hover,
		&:active {
			-webkit-text-stroke-width: 1px;
		  -webkit-text-stroke-color: #BB8C9E;
		}
	}
`;

const IndexPage = () => (
	<Layout>
		<Logo>Max Clayton Clowes</Logo>
		
		<Links>
			<a href = "mailto:maxcc@me.com">Email</a><br/>

			<a href = "tel:+447976136097">Tel</a><br/>

			<a href = "http://bit.ly/maxclaytonclowes">Portfolio</a><br/>

			<a href = "https://www.linkedin.com/in/maxclaytonclowes/">LinkedIn</a><br/>

			<a href = "https://twitter.com/mcclowes">Twitter</a><br/>

			<a href = "https://github.com/mcclowes">Github</a><br/>

			<a href = "https://dribbble.com/mcclowes">Dribbble</a><br/>

			<a href = "https://medium.com/@mcclowes">Medium</a><br/>

			<a href = "https://calendly.com/mcclowes">Book time with me</a>
		</Links>
	</Layout>
);

IndexPage.propTypes = {
	
};

export default IndexPage;
