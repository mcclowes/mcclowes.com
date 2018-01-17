import styled from "styled-components";

import { Link, } from "react-router-dom";

import { 
	Container,
	GreyscaleImage,
	Head,
	PostTile,
	Posts,
	TextCell,
} from "src/components/toolbox";

import * as vars from "src/components/style/vars";

import data from "src/data";

// --------------------------------------------------

const Cell = styled(TextCell)`
	background: #fff;
	margin: 0.5em;
	padding: 1.5em;
`;

const TitleCell = styled(Cell)`
	margin-top: 8em;
`;

const Intro = styled.div`
	max-width: 700px;
`;

const BackgroundImage = styled.div`
	position: absolute;
	top: -5em;
	height: 50vh;
    width: 100vw;
    background: url(${ props => props.image });
    left: 0;
    background-position: bottom;
    background-repeat: repeat-x;
    z-index: -1;
`;

const Project = styled.span`
`;


const ProjectLink = styled(Link)`
	color: ${ vars.colors.text};
	position: relative;
	padding-bottom: 0.5em;
	margin-right: 1em;

	&:before {
		content: "";
		position: absolute;
		width: 0;
		height: 0.1em;
		bottom: 0;
		left: 0;
		background-color: #000;
		visibility: hidden;
		transition: 0.5s;
	}

	&:hover:before {
		visibility: visible;
		width: 100%;
	}
`;

// --------------------------------------------------

const Generic = ( page ) => (
	<Container>
		<Head
			pageData = { page }
		/>

		<BackgroundImage
			image = { page.backgroundImage.url }
		/>

		<TitleCell>
			<h1>{ page.title }</h1>

			<Intro dangerouslySetInnerHTML = {{
				__html: page.html,
			}}/>
		</TitleCell>

		<Cell>
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
							<ProjectLink to = { "projects/" + project.slug }>
								{ project.title }
							</ProjectLink>
						</Project>
					)
				})
			}
		</Cell>

		<TextCell>
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