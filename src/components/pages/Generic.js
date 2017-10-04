import styled from "styled-components";

import { 
	Container,
	GridCell,
	TextCell,
	Para,
	Image,
	Post,
	Posts,
	GreyscaleImage,
} from "src/components/common";

import * as mixins from "src/components/style/mixins";

import Head from "src/components/common/Head";
import data from "src/data.js";

// --------------------------------------------------

const Project = styled.span`
	padding: 5px;
`;

// --------------------------------------------------

const Generic = ( page ) => (
	<Container>
		<Head
			pageData = { page }
		/>

		<TextCell>
			<h1>{ page.title }</h1>

			<div dangerouslySetInnerHTML = {{
				__html: page.html,
			}}/>
		</TextCell>

		<TextCell>
			{ 
				data.projects.filter( project => {
					//check if any of the projects' sections match the page
					return project.section.fields.title === page.title;
				}).length
				? <h2>Projects</h2>
				: null
			}

			{
				data.projects
				.filter( project => {
					//check if any of the projects' sections match the page
					return project.section.fields.title === page.title;
				})
				.map( project => {
					return ( 
						<Project
							key = { project.title }
						>
							<a href = { "projects/" + project.slug }>
								{ project.title }
							</a>
						</Project>
					)
				})
			}
		</TextCell>

		<TextCell>
			{
				data.posts.filter( post => {
					//check if any of the projects' sections match the page
					return post.project.filter( 
						project => { 
							console.log(project.fields.section);
							return project.fields.section.fields.title === page.title; 
						}
					).length > 0;
				}).length
				? <h2>Posts</h2>
				: null
			}

			<Posts>
				{
					data.posts
					.filter( post => {
						//check if any of the projects' sections match the page
						return post.project.filter( 
							project => { 
								console.log(project.fields.section);
								return project.fields.section.fields.title === page.title; 
							}
						).length > 0;
					})
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

export default Generic;