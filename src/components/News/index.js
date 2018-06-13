import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import slugify from "slugify";
import Moment from "moment";

import { Button, Divider, Grid, Header, Icon, Image, } from "semantic-ui-react";

// ----------------------------------------------------

const NewsThumbnail = styled(Image)`
	.ui.label {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		position: absolute;
		bottom: 0;
		border-radius: 0;
		font-size: 1.33em;
	}
`;

const NewsDivider = styled(Divider)`
	width: 100%;
`;

// ----------------------------------------------------

export const NewsItem = ({ newsItem, }) => (
	<Grid.Row key = { newsItem.id + "-newsitem" }>
		<Grid.Column>
			<NewsThumbnail
				src = {
					"https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:" +
					newsItem.image.file.url
				}
				as = { Link }
				to = { "/news/" + slugify(newsItem.title) }
			/>
		</Grid.Column>

		<Grid.Column>
			<Header as = "h3">{newsItem.title}</Header>

			<p style = { { color: "#aaaaaa", } }>
				{Moment(newsItem.publishingDate).format("MMMM Do YYYY")}
			</p>

			<p>{newsItem.description.description}</p>

			<Button
				as = { Link }
				size = "small"
				to = { "/news/" + slugify(newsItem.title) }
			>
				Read more <Icon name = "right arrow" />
			</Button>
		</Grid.Column>

		<NewsDivider section />
	</Grid.Row>
);
