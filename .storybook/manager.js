import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../utils/styles/globalStyles";
import { ThemeProvider } from "styled-components/macro";
import React from "react";

const theme = {};

addDecorator((story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {story()}
    </ThemeProvider>
  );
});

//configure(require.context("../src", true, /\.stories\.js$/), module);
