import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import PropTypes from "prop-types";

import banner from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";
import banner4 from "../../images/banner-4.jpg";
import banner5 from "../../images/banner-5.jpg";
import banner6 from "../../images/banner-1.jpg"; // To increase the chance of the best looking banner
import banner7 from "../../images/banner-1.jpg";
import banner8 from "../../images/banner-1.jpg";

import { Button, Header, Image, } from "semantic-ui-react";

// ----------------------------------------------------

const BannerArray = [
	banner,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
	banner8,
];

const BannerImage = styled(Image)`
	position: absolute !important;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;

const BannerWrapper = styled.div`
	position: relative;
`;

const BannerContent = styled.div`
	padding: ${ props => (props.mobile ? "6em" : "10em") } 0;
	text-align: center;
	background-color: rgba(136, 23, 27, 0.5);
	max-width: 100% !important;
	width: 100% !important;
`;

const BannerRandomiser = () => {
	var i = Math.floor(Math.random() * BannerArray.length);
	return BannerArray[i];
};

// ----------------------------------------------------

const Banner = props => (
	<BannerWrapper>
		{!props.mobile && <BannerImage src = { BannerRandomiser() } />}

		<BannerContent text>
			<Header
				as = "h1"
				content = "Hornsey & Wood Green Labour"
				inverted
				style = { {
					fontSize: props.mobile ? "1.5em" : "3em",
					fontWeight: "normal",
					marginBottom: 0,
				} }
			/>

			<Header
				as = "h2"
				content = "Offering a positive vision for Hornsey and Wood Green."
				inverted
				style = { {
					fontSize: props.mobile ? "1.5em" : "1.7em",
					fontWeight: "normal",
					marginTop: props.mobile ? "0.5em" : "1.5em",
				} }
			/>

			<Button
				as = { Link }
				size = "huge"
				to = "/whats-on/"
				style = { {
					marginTop: props.mobile ? "0.5em" : "1em",
				} }
			>
				What's On
			</Button>

			<Button
				as = { Link }
				size = "huge"
				to = "/new-members/"
				inverted
				style = { {
					marginTop: props.mobile ? "0.5em" : "1em",
				} }
			>
				New Members
			</Button>
		</BannerContent>
	</BannerWrapper>
);

Banner.propTypes = {
	mobile: PropTypes.bool,
};

export default Banner;
