import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-radius: 3px;
  margin: 5px;
  background-color: white;
  overflow: hidden;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Image = styled.img`
  max-width: 300px;
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
