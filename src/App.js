import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Altert from "./components/Altert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleStyle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#16466e";
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtlis" mode={mode} toggleStyle={toggleStyle} />
      <Altert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<AboutUs heading="About Us" mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;