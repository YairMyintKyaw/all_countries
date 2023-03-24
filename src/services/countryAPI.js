import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryAPI = createApi({
  reducerPath: "countryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "all?fields=name,population,region,capital,ccn3,flags",
    }),
    getDetailInfo: builder.query({
      query: (name) =>
        `name/${name}?fields=name,population,region,capital,subregion,tld,currencies,languages,flags,borders&fullText=true`,
    }),
    getCountriesInARegion: builder.query({
      query: (region) => {
        region = region == "world" ? "ocean" : region;
        return `region/${region}?fields=name,population,region,capital,flags,ccn3`;
      },
    }),
    getNameAndCCA3: builder.query({
      query: () => "all?fields=name,cca3",
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetDetailInfoQuery,
  useGetCountriesInARegionQuery,
  useGetNameAndCCA3Query,
} = countryAPI;
