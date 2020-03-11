import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";
import {
  Logo,
  Links,
  ContentWrapper,
  ContentsWrapper,
  IndexWrapper,
  Columns,
  ExternalLink,
  Link
} from "./csx";
import { Text, Padded } from "../components/UIKit";
import { useStaticQuery, graphql } from "gatsby";

const Post = props => {
  const { id, title, description, image, externalLink } = props.post;

  return (
    <Padded space="p4">
      <ContentWrapper>
        <Text.Header>{title}</Text.Header>

        {description && (
          <Padded space="pb4">
            <Text>{description}</Text>
          </Padded>
        )}

        {externalLink ? (
          <ExternalLink href={externalLink}>Read more →</ExternalLink>
        ) : (
          <Link to={"post/" + id}>Read more →</Link>
        )}
      </ContentWrapper>
    </Padded>
  );
};

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
  const data = useStaticQuery(graphql`
    query AllPosts {
      contentfulPosts: allContentfulPost {
        edges {
          node {
            id
            title
            description
            image {
              file {
                url
              }
            }
            externalLink
            publishingDate
          }
        }
      }
    }
  `);

  const posts = data.contentfulPosts.edges;
  posts.sort(function(a, b) {
    return new Date(b.node.publishingDate) - new Date(a.node.publishingDate);
  });

  return (
    <Layout>
      <IndexWrapper>
        <Padded space="p4">
          <Logo>Max Clayton Clowes</Logo>
        </Padded>

        <Columns>
          <ContentsWrapper>
            {posts.map((post, i) => (
              <Post key={i} post={post.node} />
            ))}
          </ContentsWrapper>

          <ContentsWrapper>
            <Padded space="p4">
              <ContentWrapper sticky>
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
          </ContentsWrapper>
        </Columns>
      </IndexWrapper>
    </Layout>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
