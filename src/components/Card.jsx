import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  country: {
    name: { official: countryName },
    flags,
    population,
    region,
    capital,
  },
}) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(`/detail/${countryName}`);
      }}
      className="flex flex-col shadow-lg dark:bg-dark-mode-element dark:text-white max-w-[400px] "
    >
      <div className="flex-1 flex">
        <img
          src={flags.png}
          className=" border-b max-h-[200px] w-full dark:border-b-0 "
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="whitespace-nowrap font-bold pb-5 text-ellipsis overflow-hidden">
          {countryName}
        </div>
        <div>
          <span className="font-semibold">Population: </span>
          <span className="">{population.toLocaleString()}</span>
        </div>
        <div>
          <span className="font-semibold">Region: </span>
          <span className="">{region}</span>
        </div>
        <div>
          <span className="font-semibold">Capital: </span>
          <span className="">{capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
