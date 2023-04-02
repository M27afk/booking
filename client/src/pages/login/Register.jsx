import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Wrapper = {
  width: " 40%",
  padding: "20px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const Title = {
  fontSize: "30px",
};
const Form = {
  display: "flex",
  flexWrap: "wrap",
};
const Input = {
  flex: 1,
  minWidth: "40%",
  margin: "20px 10px 0 0",
  padding: "10px",
  border: "1px solid lightgray",
  boxShadow: "0px",
  outline: "none",
  borderRadius: "5px",
  transition: "0.15s",
};

const Query = {
  display: "flex",
};

const ButtonHome = {
  margin: "5px",
  padding: "8px 12px",
  cursor: "pointer",
  backgroundColor: "none",
  border: "none",
};
const Button = {
  padding: "8px 12px",
  cursor: "pointer",
};

export default function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: undefined,
    username: undefined,
    password: undefined,
    email: undefined,
  });
  let errMessage = null;
  const handleChange = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(credentials);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const res = await axios.post("/user/register", credentials);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      errMessage = err.response.data;
      console.log(err);
    }
  };
  return (
    <div style={Container}>
      <div style={Wrapper}>
        <div style={Title}>Register now!</div>
        <div style={Form}>
          <input
            style={Input}
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <input
            style={Input}
            placeholder="Email ID"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <input
            style={Input}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            style={Input}
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div style={Query}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <div style={ButtonHome}>Home</div>
          </Link>
          <button style={ButtonHome} onClick={handleSubmit}>
            Sign Up!
          </button>
        </div>
        {errMessage && <div>{errMessage}</div>}
      </div>
    </div>
  );
}
