import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Navbar } from "react-bootstrap";
import { Link } from "@reach/router";
import NavBar from "./Navbar";
import URLS from "Routes/urls";

const NavItems = [{ to: URLS.ABOUT_US.url, text: "About me" }];

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;

  // this function willl run before every it to give wrapper obj
  beforeEach(() => {
    wrapper = shallow(<NavBar NavItems={NavItems} />);
  });

  // testing count of navbar in NavBar
  it("should render one <Navbar /> element", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it("should render one <Link /> element", () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });

  it("should render one <Link /> element", () => {
    // like this we can overwrite the wrapper to pass props but enzyme give a way to setProps
    // wrapper = shallow(<NavBar NavItems={[]} />);
    wrapper.setProps({ NavItems: [] });
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  // Checking existence of a component inside Navbar directly
  it("should check existence of Home", () => {
    expect(wrapper.contains(<Navbar.Brand>Home</Navbar.Brand>)).toEqual(true);
  });

  // Checking for the "Does Not Exist" element is not in Navbar. (JUST TO USE .toEqual(false))
  it("should check the following element does not exist", () => {
    expect(
      wrapper.contains(<Navbar.Brand>Does Not exist</Navbar.Brand>)
    ).toEqual(false);
  });
});
