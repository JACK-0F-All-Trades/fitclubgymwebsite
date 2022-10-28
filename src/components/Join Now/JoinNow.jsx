import React, { useState } from "react";
import "./JoinNow.css";

const JoinNow = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdetails = { ...userDetails };
    console.log(userdetails);
  };

  const handleChange = (e) => {
    const nameOfProperty = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [nameOfProperty]: value });
  };
  return (
    <div className="join-now">
      <hr />
      <div className="left">
        <div>
          <span className="stroke-text">READY TO</span>
          <span className="white"> LEVEL UP</span>
        </div>
        <div>
          <span className="white">YOUR BODY </span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="email"
            value={userDetails.email}
            id="email"
            onChange={handleChange}
            placeholder="Email"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            value={userDetails.password}
            id="password"
            onChange={handleChange}
            placeholder="password"
          />

          <button type="submit" className="form-btn">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
