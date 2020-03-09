import IndexPage from "../index";
import React from "react";
import { shallow } from "enzyme";

describe("IndexPage", () => {
  it("renders component", () => {
    const wrapper = shallow(<IndexPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
