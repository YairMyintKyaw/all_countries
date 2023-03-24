import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="">
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-black dark:text-white shadow py-4 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center dark:bg-dark-mode-element dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800"
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Search By Region
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownHover"
        className={`z-50 absolute ${
          !showDropdown && "hidden"
        } bg-gray divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-dark-mode-element bg-white`}
      >
        <ul
          className="py-2 text-sm text-gray-700  dark:text-white"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <Link
              to={"/africa"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Afirca
            </Link>
          </li>
          <li>
            <Link
              to={"/america"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              America
            </Link>
          </li>
          <li>
            <Link
              to={"/asia"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Asia
            </Link>
          </li>
          <li>
            <Link
              to={"/europe"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Europe
            </Link>
          </li>
          <li>
            <Link
              to={"/oceania"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Oceania
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to={"/"}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All over the world
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
