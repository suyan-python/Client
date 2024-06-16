import React from "react";
import { Link } from "react-router-dom";
import logo from "../ima/rate.svg";
import "./verify.css";

export default function Verify() {
  return (
    <div className="main-box flex-row text-center">
      <div className="sub-box">
        <div className="logo flex justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="text">Verify, Yourself</div>

        <div className="verify-button">
          <div className="new-user mt-2">
            <Link to={"/SignUp"}>
              <button className=" btn p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:shadow-xl">
                New User
              </button>
            </Link>
          </div>
          <div className="old-user mt-2">
            <Link to={"/SignIn"}>
              <button className=" btn p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:shadow-xl">
                Old User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
