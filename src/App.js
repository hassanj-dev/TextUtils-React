import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
  };

  const [fallmode, setfallMode] = useState("light");

  const toggleColorMode = () => {
    if (fallmode === "light") {
      setfallMode("dark");
      document.body.style.backgroundColor = "blue";
    } else {
      setfallMode("light");
      document.body.style.backgroundColor = "grey";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Your Text To Analyze"
                  mode={mode}
                />
              {/* }
            /> */}
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
