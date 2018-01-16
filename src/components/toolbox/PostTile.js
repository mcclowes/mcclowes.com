import styled from "styled-components";

import { Link, } from "react-router-dom";

import * as vars from "src/components/style/vars";

// --------------------------------------------------
const PostTextWrapper = styled.div`
	background: #000;
`;

const PostText = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: flex-end;
	padding-top: 100%;
	height: 100%;

	font-family: ${vars.font.title.family};
    font-size: 2em;
    line-height: 1;
    position: relative;
    padding: .5em .75em;
    text-align: center;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-image: url(${ props => props.image });
    background-size: cover;

	&:before,
	&:after {
	    position: absolute;
	    opacity: 1;
	    content: '';
	    transition-duration: 0.5s;
	}

	&:before {
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background-image: inherit;
	}

	&:after {
	    position: absolute;
	    z-index: -1;
	    top: .125em;
	    right: .125em;
	    bottom: .125em;
	    left: .125em;
	    background-color: #000;
	}

	&:before {
	    background-size: cover;
	}

	&:after {
	    content: none;
	}

	&:hover {
		&:before,
		&:after {
		    opacity: 0.3;
		    filter: blur(6px);
		}
	}
`;

const RightAlignedText = styled.div`
	text-align: right
`;

const SmallText = styled(RightAlignedText)`
	font-size: 0.5em;
	clear: both;
`;

const PostTile = (props) => (
	<PostTextWrapper>
		<Link to = { "projects/" + props.post.slug } >
			<PostText
				image = { props.post.image.url }
			>
				<SmallText>{ props.post.project[0].fields.title }</SmallText>

				<RightAlignedText>{ props.post.title }</RightAlignedText>
			</PostText>
		</Link>
	</PostTextWrapper>
);

export default PostTile;
