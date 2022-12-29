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

const Privacy = ({ posts }) => {
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
          <h2>🔐 Privacy and terms</h2>

          <p>Reply in app and I won't message you again.</p>
        </div>
      </Main>

      <Footer />
    </Container>
  );
};

export default Privacy;
