// components
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
