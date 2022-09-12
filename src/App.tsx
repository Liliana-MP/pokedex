import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
