import React from "react";
import "./Notifications.css";
import closeImg from "./close-icon.png";
import { getLatestNotification } from "./utils";
function Notifications() {
  return (
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
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
