import React from "react";
import marked from "marked";
import styled from "styled-components";

import { TopImage, } from "../components/TopImage";

import { Container, Header, Segment, Image, } from "semantic-ui-react";

// ----------------------------------------------------

export const NewsItemQuery = graphql`
	query NewsItemQuery($id: String!) {
		contentfulNews(id: { eq: $id }) {
			title
			content {
				content
			}
			image {
				file {
					url
				}
			}
		}
	}
`;

const BannerImage = styled(Image)`
	width: 100%;
	max-height: 400px
	object-fit: cover;
	z-index: -1;
`;

// ----------------------------------------------------

const NewsTemplate = props => (
	<div>
		{props.data.contentfulNews.image && (
			<TopImage
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
					props.data.contentfulNews.image.file.url
				}
			/>
		)}

		<Segment style = { { padding: "8em 0em", } } vertical>
			<Container text>
				<Header as = "h1">{props.data.contentfulNews.title}</Header>

				<div
					dangerouslySetInnerHTML = { {
						__html: marked(
							props.data.contentfulNews.content.content,
						),
					} }
				/>
			</Container>
		</Segment>
	</div>
);

export default NewsTemplate;
