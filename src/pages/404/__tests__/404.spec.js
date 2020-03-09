import NotFoundPage from "../index";
import React from "react";
import { shallow } from "enzyme";

describe("NotFoundPage", () => {
  it("renders component", () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
