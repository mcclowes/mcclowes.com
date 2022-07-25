import React from "react";
import styled from "styled-components/macro";
import moment from "moment";

const Container = styled.div`
  display: flex;
  margin: 5px;
  background-color: var(--white);
  overflow: hidden;

  @media screen and (max-width: 990px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;

  h2,
  h3,
  h4 {
    margin-top: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;

  @media screen and (min-width: 990px) {
    max-width: 300px;
    max-height: 200px;
  }
`;

const Date = styled.p`
  opacity: 0.75;
  margin: 0;
`;

const Description = styled.p``;

const LinkWrapperLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

const LinkWrapper = (props) => {
  console.log(props);

  return props.externalLink ? (
    <LinkWrapperLink href={props.externalLink} target="_blank">
      {props.children}
    </LinkWrapperLink>
  ) : (
    props.children
  );
};

const Post = (props) => {
  const { publishingDate, image, title, description, externalLink } = props;

  if (!publishingDate) return null;

  return (
    <LinkWrapper externalLink={externalLink}>
      <Container className="post">
        {image && image.fields ? (
          <Image
            alt={image.fields.description}
            src={`https:${image.fields.file.url}`}
          />
        ) : null}

        <Text>
          <h4>{title}</h4>

          <Date>{moment(publishingDate).format("MMMM Do, YYYY")}</Date>

          <Description>{description}</Description>
        </Text>
      </Container>
    </LinkWrapper>
  );
};

export default Post;
