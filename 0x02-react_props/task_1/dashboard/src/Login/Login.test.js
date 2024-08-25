import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Test Login component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);

    // Verify that there are 2 input elements
    expect(wrapper.find("input").length).toBe(2);

    // Verify that there are 2 label elements
    expect(wrapper.find("label").length).toBe(2);
  });
});
