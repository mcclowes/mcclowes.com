import styled from "styled-components";

import { 
	Container, 
	PostTile,
	Posts,
	BoldBanner,
	GreyscaleImage,
	Head,
} from "src/components/toolbox";

import * as vars from "src/components/style/vars";

import data from "src/data.js";

// --------------------------------------------------

const PostTitle = styled.a`
	background-color: ${ vars.colors.bgdark };
	position: absolute;
	bottom: 0;
`;

// --------------------------------------------------

const Home = ( page ) => (
	<Container>
		<Head
			pageData = { page }
		/>

		{
			data.posts.slice(0,1)
			.map( post => {
				return ( 
					<BoldBanner
						key = { post.slug }
						post = { post }
					/>
				)
			})
		}

		<Posts>
			{
				data.posts.slice(1)
				.map( post => {
					return ( 
						<PostTile
							key = { post.slug }
							post = { post }
						/>
					)
				})
			}
		</Posts>
	</Container>
);

export default Home;