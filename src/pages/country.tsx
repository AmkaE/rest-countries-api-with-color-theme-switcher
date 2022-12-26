import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import CountryDetails from '../components/CountryDetails';
import { fetchCountry } from '../context/CountriesActions';
import { CountriesContext } from '../context/CountriesContext';
import Spinner from '../components/Spinner';

const Country = () => {
	const params = useParams();
	const navigate = useNavigate();
	const countryName = params.countryName?.replaceAll(/-/g, ' ')!;

	const { isLoading, country, dispatch } = useContext(CountriesContext);

	useEffect(() => {
		getCountry();
	}, []);

	const getCountry = async () => {
		dispatch({ type: 'SET_LOADING' });

		const country = await fetchCountry(countryName);

		dispatch({ type: 'FETCH_COUNTRY', payload: country });
	};

	return (
		<div className='max-w-7.5xl m-auto my-16 px-4'>
			<button
				onClick={() => navigate(-1)}
				className='flex gap-2 items-center bg-very-light-gray dark:bg-dark-blue-dm-el dark:text-white-dm-text px-5 py-1 rounded-md shadow-md'
			>
				<span>
					<MdOutlineKeyboardBackspace size={20} />
				</span>
				<span className='font-thin'>Back</span>
			</button>
			{isLoading ? <Spinner /> : <CountryDetails country={country[0]} />}
		</div>
	);
};

export default Country;
