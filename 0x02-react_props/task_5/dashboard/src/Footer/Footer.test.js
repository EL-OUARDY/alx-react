import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Test Footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render at least the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);

    // Verify that the text "Copyright" is present
    expect(wrapper.text()).toContain("Copyright");
  });
});
