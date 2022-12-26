import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import CountryDetails from '../components/CountryDetails';
import { fetchCountry, fetchCountries } from '../context/CountriesActions';
import { CountriesContext } from '../context/CountriesContext';
import Spinner from '../components/Spinner';

const Country = () => {
	const params = useParams();
	const navigate = useNavigate();
	let countryName = params.countryName?.replaceAll(/-/g, ' ')!;

	const { isLoading, country, dispatch } = useContext(CountriesContext);

	useEffect(() => {
		getCountry();
	}, []);

	const getCountry = async () => {
		dispatch({ type: 'SET_LOADING' });

		const country = await fetchCountry(countryName);

		dispatch({ type: 'FETCH_COUNTRY', payload: country });
	};

	// find country by fifa/border name
	const findCountryByFifaName = async (fifName: string) => {
		const countries = await fetchCountries();
		dispatch({ type: 'FETCH_COUNTRIES', payload: countries });

		const borderCountry = countries?.find(country => country.fifa === fifName);

		if (borderCountry) {
			navigate(
				`/${borderCountry?.name.common.toLowerCase().replaceAll(/ /g, '-')}`,
			);

			const country = await fetchCountry(borderCountry?.name.common);

			dispatch({ type: 'FETCH_COUNTRY', payload: country });
		}
	};

	return (
		<div className='max-w-7.5xl m-auto my-16 px-4'>
			<button
				onClick={() => navigate('/')}
				className='flex gap-2 items-center bg-very-light-gray dark:bg-dark-blue-dm-el dark:text-white-dm-text px-5 py-1 rounded-md shadow-md'
			>
				<span>
					<MdOutlineKeyboardBackspace size={20} />
				</span>
				<span className='font-thin'>Back</span>
			</button>
			{isLoading ? (
				<Spinner />
			) : (
				<CountryDetails
					country={country[0]}
					findCountryByFifaName={findCountryByFifaName}
					countryName={''}
				/>
			)}
		</div>
	);
};

export default Country;
