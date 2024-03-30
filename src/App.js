
import './App.css';
import Alert from './components/Alert.js';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");//whether darkMode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e0d48 ";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
        {/*<Navbar/>*/}
        {/* <About/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* </Routes><Route path="/about" element={ */}
              {/* <About /> */}
            {/* }>
             </Route>
            <Route path="/" element={ */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
             {/* }> 
              </Route>
          </Routes>  */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;