import React from "react";
import { useQuery } from "@tanstack/react-query";

import { CountryService, ICountry } from "../services/country.service";

export const useCountries = () => {
  const {
    data: countries,
    isLoading,
    refetch,
  } = useQuery(["countries"], () => CountryService.getAll(), {
    onError: (error: any) => {
      alert(error.message);
    },
    select: ({ data }): ICountry[] =>
      data.map((country) => ({ ...country, title: country.title + " !" })),
    enabled: false,
  });

  return { countries, isLoading, refetch };
};

export default useCountries;
