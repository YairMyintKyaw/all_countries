import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetDetailInfoQuery,
  useGetNameAndCCA3Query,
} from "../services/countryAPI";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Detail = () => {
  const { data: countries } = useGetNameAndCCA3Query();
  const { name } = useParams();
  const nav = useNavigate();
  const { data } = useGetDetailInfoQuery(name);
  const countryInformation = data && data[0];
  const countryName =
    countryInformation && Object.values(countryInformation?.name?.nativeName);
  return (
    <div className="flex-1 flex flex-col dark:bg-dark-mode-background px-10 pb-5 ">
      <div className="py-10">
        <button
          className="px-7 shadow-2xl  border dark:border-0 py-2 flex items-center gap-2 dark:bg-dark-mode-element dark:text-white"
          onClick={() => nav(-1)}
        >
          <HiOutlineArrowNarrowLeft />
          Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            src={countryInformation?.flags.svg}
            className="border dark:border-0  lg:w-[90%]"
            alt=""
          />
        </div>
        <div className="text-light-mode-text flex-1 w-full flex flex-col gap-10 dark:text-white">
          {/* title */}
          <div className="font-semibold text-3xl">
            {countryInformation?.name.official}
          </div>
          {/* information */}
          <div className="flex gap-2 flex-col lg:flex-row">
            {/* left part */}
            <div className="flex flex-1 flex-col gap-3">
              {/* native name */}
              <div className="flex gap-3">
                <span className="font-semibold ">Native Name:</span>
                <span className=" flex-1  ">
                  {countryName?.map((name, index) => (
                    <div key={name + index}>
                      {index == countryName.length - 1
                        ? name.official
                        : name.official + ", "}
                    </div>
                  ))}
                </span>
              </div>
              {/* population */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Population:</span>
                <span>{countryInformation?.population.toLocaleString()}</span>
              </div>
              {/* region */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Region:</span>
                <span>{countryInformation?.region}</span>
              </div>
              {/* sub region */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Sub Region:</span>
                <span>{countryInformation?.subregion}</span>
              </div>
              {/* capital */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Capital:</span>
                <span>{countryInformation?.capital}</span>
              </div>
            </div>
            {/* right info part */}
            <div className="flex flex-1 flex-col gap-3">
              {/* top level domain */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Top Level Domain:</span>
                <span className="flex-1">
                  {countryInformation?.tld.join(", ")}
                </span>
              </div>
              {/* currencies */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Currencies:</span>
                <span>
                  {countryInformation &&
                    Object.keys(countryInformation?.currencies)}
                </span>
              </div>
              {/* language */}
              <div className="flex gap-3 ">
                <span className="font-semibold">Languages:</span>
                <span>
                  {countryInformation &&
                    Object.values(countryInformation?.languages).join(", ")}
                </span>
              </div>
            </div>
          </div>
          {/* border countries */}
          <div className="flex font-semibold lg:items-center gap-2 flex-col lg:flex-row ">
            <div>Border Countries:</div>
            <div className="flex gap-2 flex-wrap flex-1">
              {countryInformation?.borders?.length !== 0 ? (
                countryInformation?.borders.map((borderCountry) => {
                  const country = countries?.filter(
                    ({ name, cca3 }) => borderCountry == cca3
                  )[0].name.common;
                  return (
                    <Link
                      to={`/detail/${country}`}
                      key={borderCountry}
                      className="px-3 py-2 shadow-md cursor-pointer hover:shadow-lg dark:bg-dark-mode-element"
                    >
                      {country}
                    </Link>
                  );
                })
              ) : (
                <span className="text-red-600">No Border Country</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
