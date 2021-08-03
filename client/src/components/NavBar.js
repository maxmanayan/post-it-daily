import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import cnLogo from "../images/coffee-notes-logo.png";
import WorldClock from "./WorldClock";

const NavBar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      <Navbar fixed="top">
        <div className="navbar">
          <Navbar.Brand className="navbar-logo" href="home">
            <div className="navbar-left">
              <img src={cnLogo} height="40px" />
              {user && <WorldClock />}
            </div>
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              href="/about"
              style={{ color: "white", fontSize: "1.2em", fontWeight: "bold" }}
            >
              About
            </Nav.Link>
            {user && (
              <Nav.Link
                href="/profile"
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}
              >
                {user.nickname ? user.nickname : "Profile"}
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                onClick={() => handleLogout(history)}
                style={{
                  color: "white",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
