import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchInput } from "../services/countrySlice";
const SearchBar = () => {
  const input = useSelector((state) => state.countries.searchInput);
  const dispatch = useDispatch();
  return (
    <div className="shadow flex items-center text-light-mode-input dark:text-white bg-white dark:bg-dark-mode-element">
      <span className="pl-4">
        <AiOutlineSearch className="text-2xl" />
      </span>
      <input
        defaultValue={input}
        onChange={(e) => dispatch(updateSearchInput(e.target.value))}
        className=" h-full px-4 py-4 focus:outline-0 min-w-[250px] w-[35vw] max-w-[400px] bg-transparent"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
