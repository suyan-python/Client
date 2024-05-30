import React from "react";
import Umesh from "../../ima/civil/umesh.jpeg";
import Rohit from "../../ima/civil/rohit.jpeg";
import HoverRating from "../rating/HoverRating";

export default function CivilPeople() {
  return (
    <>
      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={Umesh} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Umesh Raut</div>
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

      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={Rohit} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Rohit Paudel</div>
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
