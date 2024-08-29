import React from "react";
import "./Notifications.css";
import closeImg from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            onClick={() => console.log("Close button has been clicked")}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            <img
              style={{
                width: "15px",
                height: "15px",
              }}
              src={closeImg}
              alt="close notifications"
            />
          </button>
          <p>Here is the list of notifications</p>
          {listNotifications && (
            <ul>
              {listNotifications.map(({ id, html, type, value }) => {
                <NotificationItem
                  key={id}
                  type={type}
                  value={value}
                  html={html}
                />;
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
