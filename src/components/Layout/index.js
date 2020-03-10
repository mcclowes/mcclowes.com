import Footer from "../Footer";
import GlobalStyle from './GlobalStyle'
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import theme from '../../theme'
import { graphql } from 'gatsby'
import { Page } from './csx'
import { ThemeProvider } from "styled-components/macro";

// export const query = graphql`
// 	query SiteTitleQuery {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 	}
// `;

const Layout = ({ children, data, }) => {
	return <ThemeProvider theme={theme}>
		<Page id="root">
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
	</ThemeProvider>
};

Layout.propTypes = {
	children: PropTypes.func,
	data: PropTypes.any,
};

export default Layout;
