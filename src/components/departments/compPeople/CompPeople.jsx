import React, { useState } from "react";
import PB from "../../ima/computer/pb.jpeg";
import RPB from "../../ima/computer/rpb.jpeg";
import HoverRating from "../rating/HoverRating";
import "../style.css";

export default function CompPeople() {
  const [contact, setContact] = useState({
    username: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };

  return (
    <>
      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={PB} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Prakash Bhattarai</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User</label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="message">FeedBack</label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
              required
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition">
            Submit
          </button>
        </form>
        <div className="comment-section">
          <div className="submit-sec">
            <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={RPB} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Harmesh Bhanusali</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>
        <div className="input-section">
          <input
            type="text"
            placeholder="FeedBack"
            className="shadow rounded my-3"
          />
        </div>
        <div className="comment-section">
          <div className="submit-sec">
            <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
