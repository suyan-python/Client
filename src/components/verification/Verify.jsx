import React from "react";
import { Link } from "react-router-dom";

export default function Verify() {
  return (
    <div className="flex-row text-center mt-72">
      <p className="text mb-4">Rate Your Teacher</p>
      <div className="new-user">
        <Link to={"/SignUp"}>
          <button className="p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:bg-white hover:text-red-500 hover:shadow-xl">
            New User
          </button>
        </Link>
      </div>
      <div className="old-user mt-2">
        <Link to={"/SignIn"}>
          <button className="p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:bg-white hover:text-red-500 hover:shadow-xl">
            Old User
          </button>
        </Link>
      </div>
    </div>
  );
}
