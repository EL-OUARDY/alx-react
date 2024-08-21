import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Test Notifications.js", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three unordered list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").length).toBe(1);
    expect(wrapper.find("li").length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(
      true
    );
  });
});
