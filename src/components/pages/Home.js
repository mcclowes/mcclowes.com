import { 
	Container,
	TextCell, 
	Post,
	Posts,
	GreyscaleImage,
} from "src/components/common";

import Head from "src/components/common/Head";
import data from "src/data.js";

// --------------------------------------------------

const Home = ( page ) => (
	<Container>
		<Head
			pageData = { page }
		/>

		<TextCell>
			<Posts>
				{
					data.posts
					.map( post => {
						return ( 
							<Post
								key = { post.slug }
							>
								<a href = { post.externalLink || post.link }>
									{
										post.image
										? (
											<GreyscaleImage>
												<img src = { post.image.url }/>
											</GreyscaleImage>
										)
										: null
									}
								</a>

								<a href = { post.externalLink || post.link }>
									<h4>{ post.title }</h4>
								</a>
							</Post>
						)
					})
				}
			</Posts>
		</TextCell>
	</Container>
);

export default Home;