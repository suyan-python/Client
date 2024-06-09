import React from "react";
import { Link } from "react-router-dom";

export default function FileTransfer() {
  return (
    <>
      <div className="back">
        <Link to="/Home">Back</Link>
      </div>
      <div className="title">This is File Transfer Section</div>
    </>
  );
}
