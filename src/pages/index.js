import Layout from "../components/layout";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import { Logo, Links } from './csx'

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
		<Logo>Max Clayton Clowes</Logo>
		
		<Links>
			{ links && links.map((link, i)=><a key={i} href={link.link}>{link.text}</a>) }
		</Links>
	</Layout>
);

IndexPage.propTypes = {
	
};

export default IndexPage;
