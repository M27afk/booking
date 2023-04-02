import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
const Container = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Wrapper = {
  width: "400px",
  padding: " 0px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const Title = {
  fontSize: "30px",
  margin: "15px",
};

const Form = {
  display: "flex",
  flexWrap: "wrap",
  margin: " 5px",
};

const InputStyle = {
  flex: 1,
  minWidth: " 60%",
  margin: "10px 0",
  padding: "10px",
  border: "1px solid lightgray",
  boxShadow: "0px",
  outline: "none",
  borderRadius: " 5px",
  transition: "0.15s",
  //   :focus{
  //     border-color: #00aec9,
  //     box-shadow: 0 0 0 0.2rem rgba(19, 162, 228, 0.25),
  //     border: none,
  //   }
};

// const LinkNav = {
//   margin: "5px 0",
//   textDecoration: "underline",
//   cursor: "pointer",
// };

const Query = {
  display: "flex",
};

const ButtonHome = {
  margin: "5px",
  padding: "10px 20px",
  cursor: "pointer",
  background: "transparent",
  border: "none",
};

const Button = {
  margin: "5px",
  padding: "10px 20px",
  cursor: "pointer",
};

export default function Login() {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/user/login", credentials);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };
  console.log(user);

  return (
    <div style={Container}>
      <div style={Wrapper}>
        <div style={Title}>SIGN IN</div>
        <div style={Form}>
          <input
            style={InputStyle}
            onChange={handleChange}
            id="username"
            placeholder="Username"
          />
          <input
            style={InputStyle}
            onChange={handleChange}
            id="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <div style={Query}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <div style={ButtonHome}>Home</div>
          </Link>
          <button style={Button} onClick={handleSubmit}>
            Login
          </button>
        </div>
        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
}
