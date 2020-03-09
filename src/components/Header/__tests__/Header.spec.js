import Header from "../Header";
import React from "react";
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders component", () => {
    const wrapper = shallow(<Header siteTitle="Default Title" />);

    expect(wrapper).toMatchSnapshot();
  });
});
