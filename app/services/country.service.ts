import axios from "axios";

const API_URL = "http://localhost:5000";

axios.defaults.baseURL = API_URL;

export interface ICountry {
  id: number;
  title: string;
  population: string;
  image: "string";
}

export const CountryService = {
  async getAll() {
    return axios.get<ICountry[]>(`/countries`);
  },
  async getById(id: string) {
    return axios.get<ICountry>(`/countries/${id}`);
  },
};
