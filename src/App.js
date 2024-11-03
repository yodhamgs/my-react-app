import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Default to light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Automatically dismiss the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"; // a dark color
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"; // light mode color
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextWrap" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
