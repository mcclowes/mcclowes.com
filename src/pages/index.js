import Layout from "../components/Layout";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import {
  Logo,
  Links,
  ContentWrapper,
  ContentsWrapper,
  IndexWrapper
} from "./csx";
import { Text, Padded } from "../components/UIKit";
//import { useStaticQuery, graphql } from "gatsby"

const links = [
  {
    link: "mailto:maxcc@me.com",
    text: "Email"
  },
  {
    link: "https://calendly.com/mcclowes",
    text: "Book time with me"
  },
  {
    link: "https://github.com/mcclowes",
    text: "Github"
  },
  {
    link: "https://twitter.com/mcclowes",
    text: "Twitter"
  },
  {
    link: "https://www.linkedin.com/in/maxclaytonclowes/",
    text: "LinkedIn"
  },
  {
    link: "https://dribbble.com/mcclowes",
    text: "Dribbble"
  },
  {
    link: "https://medium.com/@mcclowes",
    text: "Medium"
  }
];

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <IndexWrapper>
        <Padded space="p4">
          <Logo>Max Clayton Clowes</Logo>
        </Padded>

        <ContentsWrapper>
          <Padded space="p4">
            <ContentWrapper>
              <Links>
                {links &&
                  links.map((link, i) => (
                    <a key={i} href={link.link}>
                      {link.text}
                    </a>
                  ))}
              </Links>
            </ContentWrapper>
          </Padded>

          <Padded space="p4">
            <ContentWrapper>
              <Text.Header>My Thoughts</Text.Header>

              <Text>
                Nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                magna mollis euismod. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Curabitur blandit tempus
                porttitor.
              </Text>
            </ContentWrapper>
          </Padded>

          <Padded space="p4">
            <ContentWrapper>
              <Text.Header>My Thoughts</Text.Header>

              <Text>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                magna mollis euismod. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Curabitur blandit tempus
                porttitor.
              </Text>
            </ContentWrapper>
          </Padded>

          <Padded space="p4">
            <ContentWrapper>
              <Text.Header>My Thoughts</Text.Header>

              <Text>
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                magna mollis euismod. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Curabitur blandit tempus
                porttitor.
              </Text>
            </ContentWrapper>
          </Padded>

          <Padded space="p4">
            <ContentWrapper>
              <Text.Header>My Thoughts</Text.Header>

              <Text>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                magna mollis euismod. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Curabitur blandit tempus
                porttitor.
              </Text>
            </ContentWrapper>
          </Padded>

          <Padded space="p4">
            <ContentWrapper>
              <Text.Header>My Thoughts</Text.Header>

              <Text>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue. Etiam porta sem malesuada
                magna mollis euismod. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Curabitur blandit tempus
                porttitor.
              </Text>
            </ContentWrapper>
          </Padded>
        </ContentsWrapper>
      </IndexWrapper>
    </Layout>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
