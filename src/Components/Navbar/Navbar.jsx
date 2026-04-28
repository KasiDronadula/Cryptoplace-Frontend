import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../Context/CoinContext";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>

      {isLoggedIn && (
        <ul
          style={{
            display: "flex",
            gap: "30px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="/features"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Features
            </Link>
          </li>

          <li>
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Blog
            </Link>
          </li>
        </ul>
      )}

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        {!isLoggedIn ? (
          <Link to="/login">
            <button>
              Login <img src={arrow_icon} alt="" />
            </button>
          </Link>
        ) : (
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setShowLogout(!showLogout)}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                background: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              👤
            </div>

            {showLogout && (
              <div
                onClick={handleLogout}
                style={{
                  position: "absolute",
                  top: "45px",
                  right: "0",
                  background: "white",
                  color: "black",
                  padding: "8px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Logout
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
