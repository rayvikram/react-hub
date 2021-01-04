import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Navbar, Nav, Container } from "react-bootstrap";

import Routes from "Components/Layout/Routes";
import URLS from "Routes/urls";
import ThemeContext from "Context/ThemeContext";

export default function Layout() {
  const [theme, setTheme] = useContext(ThemeContext);
  const NavItems = [{ to: URLS.ABOUT_US.url, text: "About me" }];

  return (
    <Container fluid style={{ color: theme }}>
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
      <Routes />
    </Container>
  );
}
