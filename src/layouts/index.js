import Footer from "../components/footer";
import Header from "../components/header";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { graphql } from 'gatsby'

const Page = styled.div`
	padding: 0 1.5rem;
	width: 100%;
	height: 100%;
`;

// ----------------------------------

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		background-color: black;
	}
`;

// ----------------------------------

const Layout = ({ children, data, }) => (
	<Page>
		<Helmet
			title = { "m c c l o w e s" }
			meta = { [
				{ name: "description", content: "Max Clayton Clowes", },
				{ name: "keywords", content: "mcclowes, max, clayton, clowes", },
				{ name: "google-site-verification", content: "14dL14eiRbIZxtkiGQBlrGpPdCaHE38NLkJU38P6oYA", },
			] }
		/>

		<GlobalStyle/>
		
		{ children }

		<Footer/>
	</Page>
);

Layout.propTypes = {
	children: PropTypes.func,
	data: PropTypes.any,
};

export default Layout;
