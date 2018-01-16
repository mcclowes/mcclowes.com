import styled from "styled-components";

import { 
	Container,
	GreyscaleImage,
	Head,
	PostTile,
	Posts,
	TextCell,
} from "src/components/toolbox";

import data from "src/data.js";

// --------------------------------------------------

const Project = styled.span`
	padding: 5px;
`;

const Intro = styled.div`
	max-width: 700px;
`;

// --------------------------------------------------

const Generic = ( page ) => (
	<Container>
		<Head
			pageData = { page }
		/>

		<TextCell>
			<h1>{ page.title }</h1>

			<Intro dangerouslySetInnerHTML = {{
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
							<PostTile
								key = { post.slug }
								post = { post }
							/>
						)
					})
				}
			</Posts>
		</TextCell>
	</Container>
);

export default Generic;