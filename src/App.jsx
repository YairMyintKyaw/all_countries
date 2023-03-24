import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const isDarkMoodOn = useSelector((state) => state.countries.darkmood);
  return (
    <div className={`${isDarkMoodOn && "dark"} min-h-screen flex flex-col`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/:region" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
