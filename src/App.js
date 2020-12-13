import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "Components/Layout/Layout";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "Components/UI/Errorboundary";
import ThemeContext from "Context/ThemeContext";

toast.configure({
  autoClose: 2500,
  position: toast.POSITION.BOTTOM_RIGHT,
});

function App() {
  const theme = useState("blue");
  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeContext.Provider value={theme}>
          <Layout />
        </ThemeContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
