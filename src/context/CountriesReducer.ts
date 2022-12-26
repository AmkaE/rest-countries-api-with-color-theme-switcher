import type { CountriesAction, CountriesReducerState } from '../types/country';

export const countriesReducer = (
	state: CountriesReducerState,
	action: CountriesAction,
): CountriesReducerState => {
	switch (action.type) {
		case 'FETCH_COUNTRIES':
			return {
				...state,
				countries: action.payload,
				isLoading: false,
			};
		case 'FETCH_COUNTRY':
			return {
				...state,
				country: action.payload,
				isLoading: false,
			};
		case 'SEARCH_COUNTRY_BY_NAME':
			return {
				...state,
				countries: action.payload,
				isLoading: false,
			};
		case 'FILTER_BY_REGION':
			return {
				...state,
				countries: action.payload,
				isLoading: false,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};
