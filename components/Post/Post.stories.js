import Post from "./index";
import React from "react";

export default { title: "Post" };

const postProps = {
  publishingDate: "20-20-2025",
  image: {
    fields: {
      description: "An image description",
      file: {
        url: "some-url",
      },
    },
  },
  title: "A post title",
  description: "A post description",
};

export const emptyPost = () => {
  return <Post />;
};

export const post = () => {
  return <Post />;
};
