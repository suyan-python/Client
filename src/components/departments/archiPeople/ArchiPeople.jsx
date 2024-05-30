import React from "react";
import Sunita from "../../ima/architect/sunita.jpeg";
import Samita from "../../ima/architect/samita.jpeg";
import HoverRating from "../rating/HoverRating";

export default function ArchiPeople() {
  return (
    <>
      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={Sunita} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Sunita Subedi</div>
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

      <div className="person1 text-center h-96 border">
        <div className="image-area flex justify-center">
          <img className="w-2/4 rounded-xl shadow-lg" src={Samita} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Samita Shrestha</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="rating-area flex justify-center">
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
            <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition w-72">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
