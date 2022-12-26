import { useState, useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { searchCountriesByRegion } from '../context/CountriesActions';

const Filter = () => {
	const [regions, setRegions] = useState<string>('Filter by Region');
	const [isActive, setIsActive] = useState<boolean>(false);

	const { dispatch } = useContext(CountriesContext);

	const handleActive = () => {
		setIsActive(!isActive);
	};

	const showOptions = async (option: string) => {
		dispatch({ type: 'SET_LOADING' });

		setRegions(option);

		const countries = await searchCountriesByRegion(option);

		dispatch({ type: 'FILTER_BY_REGION', payload: countries });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegions(e.target.value);
	};

	return (
		<div
			className={`relative xmd:max-w-fit xmd:w-80 max-w-fit self-start md:mt-0 mt-2 h-12 rounded-lg bg-very-light-gray shadow-lg before:absolute before:right-5 before:w-2 before:h-2 before:z-10 before:border before:border-slate-900 before:border-t-very-light-gray before:border-r-very-light-gray before:dark:border-very-light-gray before:dark:border-t-dark-blue-dm-el before:dark:border-r-dark-blue-dm-el before:pointer-events-none ${
				isActive
					? 'before:-rotate-225 before:top-6'
					: 'before:-rotate-45 before:top-4'
			}`}
			onClick={handleActive}
		>
			<input
				type='text'
				className='absolutes px-5 py-3 w-full h-full rounded-md outline-none select-none cursor-pointer dark:bg-dark-blue-dm-el dark:text-white-dm-text'
				placeholder='Dropdown Menu'
				readOnly
				value={regions}
				onChange={handleChange}
			/>
			<div
				className={`w-full absolute top-14 cursor-pointer bg-very-light-gray shadow-lg dark:bg-dark-blue-dm-el dark:text-white-dm-text flex flex-col gap-2 rounded-md overflow-hidden ${
					isActive ? 'block' : 'hidden'
				}`}
			>
				<div
					className='hover:bg-blue-500 px-5 py-2 hover:text-white'
					onClick={() => showOptions('Africa')}
					tabIndex={0}
				>
					Africa
				</div>
				<div
					className='hover:bg-blue-500 px-5 py-2 hover:text-white'
					onClick={() => showOptions('America')}
					tabIndex={0}
				>
					America
				</div>
				<div
					className='hover:bg-blue-500 px-5 py-2 hover:text-white'
					onClick={() => showOptions('Asia')}
					tabIndex={0}
				>
					Asia
				</div>
				<div
					className='hover:bg-blue-500 px-5 py-2 hover:text-white'
					onClick={() => showOptions('Europe')}
					tabIndex={0}
				>
					Europe
				</div>
				<div
					className='hover:bg-blue-500 px-5 py-2 hover:text-white'
					onClick={() => showOptions('Oceania')}
					tabIndex={0}
				>
					Oceania
				</div>
			</div>
		</div>
	);
};

export default Filter;
