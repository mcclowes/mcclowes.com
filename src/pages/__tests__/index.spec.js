import IndexPage from "../index";
import React from "react";
import { shallow } from "enzyme";
import * as Gatsby from "gatsby";

const DEFAULT_PROPS = {
  contentfulPosts: {
    edges: [
      {
        node: {
          id: "f0c15b3f-c067-450c-a684-78900c4866c1",
          title: "Dummy Post 1",
          description: "A nice description",
          image: {
            file: {
              url: "some-url.com"
            }
          },
          externalLink: "some-other-url.com",
          publishingDate:
            "Wed Mar 10 2020 18:34:30 GMT+0000 (Greenwich Mean Time)"
        }
      },
      {
        node: {
          id: "56c31326-af74-4be9-ab2f-285f47467be6",
          title: "Dummy Post 2",
          description: "Another good ol description",
          image: {
            file: {
              url: "some-url.com"
            }
          },
          publishingDate:
            "Wed Mar 11 2020 18:34:30 GMT+0000 (Greenwich Mean Time)"
        }
      }
    ]
  }
};

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
useStaticQuery.mockImplementation(() => DEFAULT_PROPS);

describe("IndexPage", () => {
  it("renders component", () => {
    const wrapper = shallow(<IndexPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
