import React from "react";

import Head from "next/head";

import { fetchEntries } from "@utils/contentfulPosts";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";

import { Nav } from "@components/UIKit";

import styled from "styled-components/macro";

import { GlobalStyle } from "../../utils/styles/globalStyles";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const Page = (props) => {
  const { children } = props;

  return (
    <Container>
      <GlobalStyle />

      <Head>
        <title>mcclowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Nav/>

        <Header />

        {children}
      </Main>

      <Footer />
    </Container>
  );
};

export default Page;
