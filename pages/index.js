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
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-width: 700px;
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

        <div>
          <h2>This site is work in progress</h2>

          <p>There's not much here at the moment! In the meantime:</p>

          <ul>
            <li>You can check out my <a href="https://github.com/mcclowes?tab=repositories">code and projects</a></li>
            <li>My full CV is <a href="https://cv.mcclowes.com/">here</a></li>
            <li>I got a new camera and am <a href="https://www.instagram.com/mcclowes/">using Instagram more</a></li>
            <li>I recently <a href="https://www.instagram.com/welcometothegrandparade/">bought a house and am doing it up</a></li>
            <li>I occasionally write about <a href="https://mcclowes.substack.com/">productivity and tech</a></li>
          </ul>

          <p>
            See more <a href="https://linktr.ee/mcclowes">links and social media</a>...
          </p>
        </div>

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
