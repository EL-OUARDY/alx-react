import React from "react";
import propTypes from "prop-types";
import "./CourseList.css";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // props:
  // - isHeader: bool, default: false
  // - textFirstCell: string, required
  // - textSecondCell: string, default: null
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={{ backgroundColor: "#deb5b545" }}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={{ backgroundColor: "#deb5b545" }}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr style={{ backgroundColor: "#f5f5f5ab" }}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default CourseListRow;
