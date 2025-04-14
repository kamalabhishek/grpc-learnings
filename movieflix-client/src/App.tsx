import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { theme } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalContextProvider } from "./context/ModalContext";
import MoviesPage from "./pages/MoviePage";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ModalContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/movies" element={<MoviesPage />} />
            </Routes>
          </BrowserRouter>
        </ModalContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
