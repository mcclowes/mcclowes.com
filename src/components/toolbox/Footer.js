import React from "react";
import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";

import { Icon, } from "./";

import data from "src/data.js";

// --------------------------------------------------

const Wrapper = styled.footer`
	background-color: ${R.path([ "theme", "footer", ])};
	${ mixins.bpEither("height", vars.dim.footer.height) }
	${ mixins.bpEither("padding", vars.dim.nav.margin) };
	align-items: center;
	//border-top: 1px solid ${ mixins.tr(0.2) };
	bottom: 0;
	display: flex;
	justify-content: space-between;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
`;

const Left = styled.div`
	font-weight: bold;
	color: ${R.path([ "theme", "text", ])};

	a {
		color: ${R.path([ "theme", "text", ])};

		&:hover,
		&:active {
			color: #eee;
		}
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 1.5em;

	a {
		color: ${R.path([ "theme", "text", ])};
		margin-left: 0.5em;

		&:hover,
		&:active {
			color: #eee;
		}
	}
`;

const Footer = () =>
	<Wrapper>
		<Left>Site by <a href="https://codogo.io">Codogo</a></Left>

		<Right>
			<a href = { `https://www.twitter.com/${ data.twitterUsername }` }><Icon type = "twitter"/></a>

			<a href = { `https://www.medium.com/@${ data.mediumUsername }` }><Icon type = "medium"/></a>

			<a href = { `https://www.linkedin.com/in/${ data.linkedInUsername }` }><Icon type = "linkedin"/></a>

			<a href = { `https://www.github.com/${ data.githubUsername }` }><Icon type = "github"/></a>
		</Right>
	</Wrapper>;

export default Footer;
