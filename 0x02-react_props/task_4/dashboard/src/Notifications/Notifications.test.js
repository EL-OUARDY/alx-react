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

  it("should display the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    // Check that the menu item is displayed
    const menuItem = wrapper.find(".menuItem");
    expect(menuItem.exists()).toBe(true);
  });

  it("should not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    // Check that the Notifications div is not displayed
    const notificationsDiv = wrapper.find(".Notifications");
    expect(notificationsDiv.exists()).toBe(false);
  });

  it("should display the menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    // Check that the menu item is displayed
    const menuItem = wrapper.find(".menuItem");
    expect(menuItem.exists()).toBe(true);
  });

  it("should display div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    // Check that the Notifications div is displayed
    const notificationsDiv = wrapper.find(".Notifications");
    expect(notificationsDiv.exists()).toBe(true);
  });
});
