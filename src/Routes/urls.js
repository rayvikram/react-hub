import React from "react";
import Home from "Components/Home/home";
import IFSC from "Components/IFSC/ifsc";

const NotFound = () => <h1>Not Found!</h1>;

const ROUTES = {
  HOME: {
    component: Home,
    url: "/",
  },
  IFSC: {
    component: IFSC,
    url: "/bank",
    url_id: "/bank/:id",
  },
  ABOUT_US: {
    component: NotFound,
    url: "/about-us",
  },
  NOT_FOUND: {
    component: NotFound,
  },
};

export default ROUTES;
