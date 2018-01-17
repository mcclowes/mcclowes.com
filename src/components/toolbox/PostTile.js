import styled from "styled-components";

import { Link, } from "react-router-dom";

import * as vars from "src/components/style/vars";

// --------------------------------------------------
const PostTextWrapper = styled.div`
	background: #000 url(${ props => props.image });
	background-size: cover;
	color: ${ vars.colors.text };
	overflow: none;
	padding: 1.5em;
	align-items: flex-end;
	display: flex;
	min-height: ${ props => props.banner ? "30em" : "20em" };

	&:hover {
		opacity: 0.7;
	}
`;

const PostText = styled.div`
	align-items: start;
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 80%;
    color: ${ vars.colors.text };
    font-family: ${ vars.font.title.family };
    font-size: 2em;
    line-height: 1.1;
    padding: .35em .5em;
    background-color: ${ vars.colors.background };
`;

const RightAlignedText = styled.div`
`;

const SmallText = styled(RightAlignedText)`
	font-size: 0.5em;
	clear: both;
`;

const ExtLink = (props) => (
	(props.post && props.post.externalLink)
	? (
		<a href = { props.post.externalLink } >
			{ props.children }
		</a>
	)
	: (
		<Link to = { "posts/" + props.post.slug } >
			{ props.children }
		</Link>
	)
);

const PostTile = (props) => (
	<ExtLink post = { props.post }>
		<PostTextWrapper 
			banner = { props.banner || false }
			image = { props.post && props.post.image && props.post.image.url }
		>
			<PostText>
				<SmallText>{ props.post.project[0].fields.title }</SmallText>

				<RightAlignedText>{ props.post.title }</RightAlignedText>
			</PostText>
		</PostTextWrapper>
	</ExtLink>
);

export default PostTile;
