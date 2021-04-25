import React from "react";

export default function Notification({ message }) {
  return <p className="notification">{message}</p>;
}

Notification.defaultPros = {
  message: "Oops, something went wrong!",
};
