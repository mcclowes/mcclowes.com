import React from "react";

import { fetchEntries } from "@utils/contentfulPosts";

import Post from "@components/Post";
import Page from "@components/Page";

import styled from "styled-components/macro";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = (props) => {
  const { posts } = props;

  console.log(props)

  return (
    <Page>
      <Posts>
        {posts.map((post, i) => {
          return <Post key={i} {...post} />;
        })}
      </Posts>
    </Page>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetchEntries();

  // normalize
  const posts = await res.map((post) => {
    return post.fields;
  });

  return {
    props: {
      posts,
    },
  };
};
