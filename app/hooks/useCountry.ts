import React from "react";
import { useQuery } from "@tanstack/react-query";

import { CountryService, ICountry } from "../services/country.service";

export const useCountry = (id?: string) => {
  const { data: country, isLoading } = useQuery(
    ["countries", id],
    () => CountryService.getById(String(id)),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      select: ({ data }): ICountry => data,
      enabled: !!id,
    }
  );

  return { country, isLoading };
};

export default useCountry;
