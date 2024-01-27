import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
import LogIn from "./LogIn.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LogIn />} />
    </Routes>
    </Router>
  </React.StrictMode>
);
