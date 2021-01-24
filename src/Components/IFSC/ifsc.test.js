// IN THIS FILE I

import React from "react";
import { render, cleanup } from "@testing-library/react";

import Axios from "axios";
import IFSC from "./ifsc";

//requirement by jest
afterEach(cleanup);

test("IFSC", async () => {
  // beforeEach(()=>{

  // })
  const { getByTestId } = render(<IFSC />); // rendering IFSC

  // IFSC form have 2 childs (search input  & search button) so testing for its child length
  const ifscForm = getByTestId("ifsc-form"); // getting the form
  expect(ifscForm.children.length).toEqual(2); // checking the lenght of the childs
});

test("IFSC", async () => {
  const { getByTestId } = render(<IFSC id="SBIN0016297" />);
  expect(Axios.get).toHaveBeenCalled();
  const ifscData = getByTestId("ifsc-data");
  expect(ifscData.render).toBeInTheDocument();
});
