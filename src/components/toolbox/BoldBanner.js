import styled from "styled-components";

import { Link, } from "react-router-dom";

import * as vars from "src/components/style/vars";

// --------------------------------------------------

const BannerTextWrapper = styled.div`
	color: ${vars.colors.text};
	background: ${vars.colors.background};
	overflow: none;
`;

const BannerText = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: flex-end;
	height: 60vh;

    font-family: ${vars.font.title.family};
    font-size: 4.5em;
    line-height: 1;
    position: relative;
    padding: .5em .75em;
    text-align: center;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
	overflow: none;

    background-image: url(${ props => props.image });
    background-size: cover;
`;

const RightAlignedText = styled.div`
	text-align: right
`;

const SmallText = styled(RightAlignedText)`
	font-size: 0.5em;
	clear: both;
`;

const BoldBanner = (props) => (
	<BannerTextWrapper>
		<Link to = { "projects/" + props.post.slug } >
			<BannerText
				image = { props.post.image.url }
			>
				<SmallText>{ props.post.project[0].fields.title }</SmallText>

				<RightAlignedText>{ props.post.title }</RightAlignedText>
			</BannerText>
		</Link>
	</BannerTextWrapper>
);

export default BoldBanner;
