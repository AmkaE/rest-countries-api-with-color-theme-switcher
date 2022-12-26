import type { Country } from '../types/country';
import axios from 'axios';

const countriesApi = axios.create({
	baseURL: 'https://restcountries.com',
});

export const fetchCountries = async () => {
	try {
		const response = await countriesApi.get<Country[]>('/v3/all');
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};

export const fetchCountry = async (countryName: string) => {
	try {
		const response = await countriesApi.get<Country>(`/v3/name/${countryName}`);

		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};

export const searchCountriesByRegion = async (region: string) => {
	try {
		const response = await countriesApi.get<Country[]>(`/v3/region/${region}`);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
