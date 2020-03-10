import Layout from "../components/Layout";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import { Logo, Links, ContentWrapper, ContentsWrapper, IndexWrapper } from './csx'
import { Text, Padded } from '../components/UIKit'

const links = [
	{
		link: "mailto:maxcc@me.com",
		text: "Email",
	},
	{
		link: "tel:+447976136097",
		text: "Tel",
	},
	{
		link: "http://bit.ly/maxclaytonclowes",
		text: "Portfolio",
	},
	{
		link: "https://www.linkedin.com/in/maxclaytonclowes/",
		text: "LinkedIn",
	},
	{
		link: "https://twitter.com/mcclowes",
		text: "Twitter",
	},
	{
		link: "https://github.com/mcclowes",
		text: "Github",
	},
	{
		link: "https://dribbble.com/mcclowes",
		text: "Dribbble",
	},
	{
		link: "https://medium.com/@mcclowes",
		text: "Medium",
	},
	{
		link: "https://calendly.com/mcclowes",
		text: "Book time with me",
	},
]

const IndexPage = () => (
	<Layout>
		<IndexWrapper>
			<Padded space="p5">
				<Logo>Max Clayton Clowes</Logo>
			</Padded>

			<Padded space="p5">
				<ContentWrapper>
					<Links>
						{ links && links.map((link, i)=><a key={i} href={link.link}>{link.text}</a>) }
					</Links>
				</ContentWrapper>
			</Padded>

			<ContentsWrapper>
				<Padded space="p5">
					<ContentWrapper>
						<Text.Header>My Thoughts</Text.Header>

						<Text>Nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</Text>
					</ContentWrapper>
				</Padded>

				<Padded space="p5">
					<ContentWrapper>
						<Text.Header>My Thoughts</Text.Header>

						<Text>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</Text>
					</ContentWrapper>
				</Padded>

				<Padded space="p5">
					<ContentWrapper>
						<Text.Header>My Thoughts</Text.Header>

						<Text>Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</Text>
					</ContentWrapper>
				</Padded>

				<Padded space="p5">
					<ContentWrapper>
						<Text.Header>My Thoughts</Text.Header>

						<Text>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</Text>
					</ContentWrapper>
				</Padded>

				<Padded space="p5">
					<ContentWrapper>
						<Text.Header>My Thoughts</Text.Header>

						<Text>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</Text>
					</ContentWrapper>
				</Padded>
			</ContentsWrapper>
		</IndexWrapper>
	</Layout>
);

IndexPage.propTypes = {
	
};

export default IndexPage;
