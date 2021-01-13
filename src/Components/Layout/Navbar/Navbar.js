import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Navbar, Nav } from "react-bootstrap";

import ThemeContext from "Context/ThemeContext";
import URLS from "Routes/urls";

export default function NavBar({ NavItems }) {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <Navbar bg="light" expand="lg">
      <Link to={URLS.HOME.url}>
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      <Navbar.Collapse className="justify-content-end">
        <label>
          Text Color:{" "}
          <input
            onChange={(e) => setTheme(e.target.value)}
            type="color"
          ></input>
        </label>
        &nbsp;
        <Nav>
          {NavItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.text}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
