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
  max-height: 300px;
  width: 100%;
  object-fit: cover;
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
        <h2>{title}</h2>

        <h3>{publishingDate.substring(0, 10)}</h3>

        <div className="description">{description}</div>
      </Text>
    </Container>
  );
};

export default Post;
