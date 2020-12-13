import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

export default function useSpinner(initialState) {
  const [state, setState] = useState(initialState);
  const Spin = () => {
    return state ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : (
      <></>
    );
  };

  return [state, setState, Spin];
}
