import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

function AdminDetails() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get("http://localhost:8080/getUsers");
  //     setData(response.data);
  //   };
  //   getData();
  // }, []);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
  }
  return (
    <>
      <div className="back">
        <Link to="/Home">Back</Link>
      </div>
      <div className="backend">{user}</div>
    </>
  );
}

export default AdminDetails;
