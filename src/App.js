import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light"); //state variable tells whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing site";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Instal TextUtils Now";
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* /users --->component-1 */}
        {/* /users/home --component-2 */}
      <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />}/>
          
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
