import Footer from "../Footer";
import React from "react";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("renders component", () => {
    const wrapper = shallow(<Footer siteTitle="Default Title" />);

    expect(wrapper).toMatchSnapshot();
  });
});
