import React from "react";
import { BsMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkmood } from "../services/countrySlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="px-6 py-6 shadow-md flex justify-between dark:bg-dark-mode-element items-center">
      <Link to={"/"} className="dark:text-white text-xl">
        Where in the world?
      </Link>

      <div
        className="flex items-center gap-2 dark:text-white cursor-pointer "
        onClick={() => {
          dispatch(toggleDarkmood());
        }}
      >
        <span>
          <BsMoonFill />
        </span>
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
