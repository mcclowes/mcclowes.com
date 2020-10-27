import React from "react";

import Head from "next/head";

import { fetchEntries } from "@utils/contentfulPosts";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";

import styled from "styled-components/macro";

import { GlobalStyle } from "../utils/styles/globalStyles";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: #333;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = ({ posts }) => {
  return (
    <Container>
      <GlobalStyle />

      <Head>
        <title>mcclowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />

        <Posts>
          {posts.map((post, i) => {
            return <Post key={i} {...post} />;
          })}
        </Posts>
      </Main>

      <Footer />
    </Container>
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
