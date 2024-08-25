import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

describe("Test App.js", () => {
  it("App without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render Notifications, Header, Login, and Footer components", () => {
    const wrapper = shallow(<App />);

    // Verify that the Notifications component is rendered
    expect(wrapper.find(Notifications).length).toBe(1);

    // Verify that the Header component is rendered
    expect(wrapper.find(Header).length).toBe(1);

    // Verify that the Login component is rendered
    expect(wrapper.find(Login).length).toBe(1);

    // Verify that the Footer component is rendered
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
