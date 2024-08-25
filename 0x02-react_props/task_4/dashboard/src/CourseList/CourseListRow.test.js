import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("should render one cell with colspan = 2 when isHeader is true and textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First Cell" />
    );

    // Check if it renders one <th> with colspan = 2
    const thElement = wrapper.find("th");
    expect(thElement).toHaveLength(1);
    expect(thElement.prop("colSpan")).toBe(2);
    expect(thElement.text()).toBe("First Cell");
  });

  it("should render two cells when isHeader is true and textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Cell"
        textSecondCell="Second Cell"
      />
    );

    // Check if it renders two <th> elements
    const thElements = wrapper.find("th");
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe("First Cell");
    expect(thElements.at(1).text()).toBe("Second Cell");
  });
});
