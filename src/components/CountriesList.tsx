import type { Country } from '../types/country';
import { useContext, useEffect } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import CountryItem from './CountryItem';
import { fetchCountries } from '../context/CountriesActions';
import Spinner from './Spinner';

const CountriesList = () => {
	const { isLoading, countries, dispatch } = useContext(CountriesContext);

	useEffect(() => {
		getCountries();
	}, []);

	const getCountries = async () => {
		dispatch({ type: 'SET_LOADING' });

		const countries = await fetchCountries();

		dispatch({ type: 'FETCH_COUNTRIES', payload: countries });
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className='max-w-7.5xl m-auto my-12 px-4 grid gap-4 1.5xl:grid-cols-4 lg:grid-cols-3 xmd:grid-cols-2 grid-cols-1 '>
			{countries.map((country: Country) => (
				<CountryItem key={country.name.common} country={country} />
			))}
		</div>
	);
};

export default CountriesList;
