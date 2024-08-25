import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Test Header component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Verify that the component renders an img and h1 tags", () => {
    const wrapper = shallow(<Header />);
    // Verify that the img element is rendered
    expect(wrapper.find("img").length).toBe(1);

    // Verify that the h1 element is rendered
    expect(wrapper.find("h1").length).toBe(1);
  });
});
