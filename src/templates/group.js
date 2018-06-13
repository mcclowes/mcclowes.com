import React from "react";
import marked from "marked";

import { TopImage, } from "../components/TopImage";

import { Container, Divider, Grid, Header, Segment, } from "semantic-ui-react";

import { NewsItem, } from "../components/News";

// ----------------------------------------------------

export const GroupItemQuery = graphql`
	query GroupItemQuery($id: String!) {
		contentfulGroup(id: { eq: $id }) {
			id
			name
			description {
				description
			}
			image {
				file {
					url
				}
			}
		}
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
					description {
						description
					}
					image {
						file {
							url
						}
					}
					reference {
						id
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = props => {
	const group = props.data.contentfulGroup;

	const news =
		props.data.contentfulNews &&
		props.data.contentfulNews.edges.filter(
			newsItem =>
				newsItem.node.reference
					? newsItem.node.reference.id === group.id
					: false,
		);

	return (
		<div>
			{group.image && (
				<TopImage
					src = {
						"https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto/https:" +
						group.image.file.url
					}
				/>
			)}

			<Segment style = { { padding: "8em 0em", } } vertical>
				<Container text>
					<Header as = "h1">{group.name}</Header>

					<div
						dangerouslySetInnerHTML = { {
							__html: marked(group.description.description),
						} }
					/>

					<Divider
						as = "h4"
						className = "header"
						horizontal
						style = { {
							margin: "3em 0em",
							textTransform: "uppercase",
						} }
					>
						Recent News
					</Divider>

					{news && (
						<Grid columns = { 2 } stackable>
							{news
								.sort(function(a, b) {
									return (
										new Date(b.node.publishingDate) -
										new Date(a.node.publishingDate)
									);
								})
								.map(newsItem => (
									<NewsItem newsItem = { newsItem.node } />
								))}
						</Grid>
					)}
				</Container>
			</Segment>
		</div>
	);
};

export default NewsTemplate;
