import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const { user, error, dispatch } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking Clone</span>
        </Link>

        {!user ? (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </button>
          </div>
        ) : (
          <>
            <div className="navItems">
              {user.username}
              <button onClick={handleLogout} className="navButton">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
