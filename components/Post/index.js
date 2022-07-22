import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  margin: 5px;
  background-color: var(--white);
  overflow: hidden;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;

  h2,
  h3 {
    margin-top: 0;
  }
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  object-fit: cover;
`;

const Date = styled.p`
  opacity: 0.9;
`;

const Description = styled.p`

`;

const Post = (props) => {
  const { publishingDate, image, title, description } = props;

  if (!publishingDate) return null;

  return (
    <Container className="post">
      {image && image.fields ? (
        <Image
          alt={image.fields.description}
          src={`https:${image.fields.file.url}`}
        />
      ) : null}

      <Text>
        <h4>{title}</h4>

        <Date>{publishingDate.substring(0, 10)}</Date>

        <Description>{description}</Description>
      </Text>
    </Container>
  );
};

export default Post;
