import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

// Default prop values
App.defaultProps = {
  isLoggedIn: false,
};

// Prop type validation
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
