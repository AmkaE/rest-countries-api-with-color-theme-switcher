import { useState, useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { fetchCountry } from '../context/CountriesActions';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [inputIsEmpty, setInputIsEmpty] = useState<boolean>(true);

	const { countries, dispatch } = useContext(CountriesContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setInputIsEmpty(e.target.value === '');
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			!countries
				?.map(country => country.name.common.toLowerCase())
				.includes(searchTerm.toLowerCase())
		) {
			toast.error('Country not found!');
			return;
		}

		dispatch({ type: 'SET_LOADING' });

		const country = await fetchCountry(searchTerm);

		dispatch({ type: 'SEARCH_COUNTRY_BY_NAME', payload: country });

		setSearchTerm('');
		return;
	};

	return (
		<form onSubmit={handleSubmit} className='xmd:max-w-xs grow w-full '>
			<label className='w-full relative '>
				<span className='sr-only'>Search</span>
				{inputIsEmpty && (
					<span className='absolute top-0 left-4 text-gray-400 dark:text-white-dm-text'>
						<AiOutlineSearch size={24} />
					</span>
				)}
				<input
					type='search'
					placeholder='Search for a country...'
					className='w-full bg-very-light-gray dark:bg-dark-blue-dm-el rounded-md px-4 py-3 shadow-md border border-slate dark:text-white-dm-text placeholder:pl-8 placeholder:text-gray-400 focus:outline-slate-700 placeholder:dark:text-white-dm-text'
					value={searchTerm}
					onChange={handleChange}
				/>
			</label>
		</form>
	);
};

export default SearchForm;
