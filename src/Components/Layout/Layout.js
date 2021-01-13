import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import Routes from "Components/Layout/Routes";
import ThemeContext from "Context/ThemeContext";
import Navbar from "./Navbar/Navbar";
import URLS from "Routes/urls";

export default function Layout() {
  const [theme, setTheme] = useContext(ThemeContext);
  const NavItems = [{ to: URLS.ABOUT_US.url, text: "About me" }];

  return (
    <Container fluid style={{ color: theme }}>
      <Navbar NavItems={NavItems} />
      <Routes />
    </Container>
  );
}
