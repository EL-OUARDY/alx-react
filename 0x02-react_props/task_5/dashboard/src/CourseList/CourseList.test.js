import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
  it("should render without crashing", () => {
    shallow(<CourseList />);
  });

  it("should render 5 CourseListRow components", () => {
    const wrapper = shallow(<CourseList />);

    const courseListRowElements = wrapper.find(CourseListRow);

    expect(courseListRowElements).toHaveLength(5);
  });
});
