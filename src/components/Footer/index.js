import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import moment from "moment";

import Link from "gatsby-link";

import { Container, Grid, Header, List, Segment, } from "semantic-ui-react";

// ----------------------------------------------------

// ----------------------------------------------------

const Footer = props => (
	<Segment color = "grey" style = { { padding: "5em 0em", } } inverted vertical>
		<Container>
			<Grid divided inverted stackable>
				<Grid.Row>
					@mcclowes
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);

export default Footer;
