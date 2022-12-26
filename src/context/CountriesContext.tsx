import { createContext, FC, useReducer } from 'react';
import { countriesReducer } from './CountriesReducer';
import type {
	CountriesContextType,
	CountriesProviderProps,
	CountriesReducerState,
} from '../types/country';

const defaultContext = {
	countries: [],
	country: {},
	isLoading: false,
	dispatch: () => {},
};

export const CountriesContext =
	createContext<CountriesContextType>(defaultContext);

export const CountriesProvider: FC<CountriesProviderProps> = ({ children }) => {
	const initialState: CountriesReducerState = {
		countries: [],
		country: {},
		isLoading: false,
	};

	const [state, dispatch] = useReducer(countriesReducer, initialState);

	const values = {
		...state,
		dispatch,
	};

	return (
		<CountriesContext.Provider value={values}>
			{children}
		</CountriesContext.Provider>
	);
};
