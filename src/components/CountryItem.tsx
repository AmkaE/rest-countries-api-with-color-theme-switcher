import type { CountryProps } from '../types/country';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const formatter = new Intl.NumberFormat('en-US');

const CountryItem: FC<CountryProps> = ({ country }) => {
	const { name, population, region, capital, flags } = country;

	return (
		<Link
			to={`/${name.official.toLowerCase().replaceAll(' ', '-')}`}
			className='border max-w-xs w-full shadow-md rounded-md overflow-hidden'
		>
			<img
				src={(flags as string[])[1]}
				alt={`${name.official} flag`}
				className='h-52 w-full'
			/>
			<div className='w-full flex flex-col gap-4 p-4 bg-very-light-gray dark:bg-dark-blue-dm-el dark:text-white-dm-text'>
				<h3 className='text-2xl font-bold capitalize'>{name.common}</h3>
				<div>
					<span className='text-sm font-bold mr-2'>Population:</span>
					<span className='text-gray-500'>{formatter.format(population)}</span>
				</div>
				<div>
					<span className='text-sm font-bold mr-2'>Region:</span>
					<span className='text-gray-500'>{region}</span>
				</div>
				<div>
					<span className='text-sm font-bold mr-2'>Capital:</span>
					<span className='text-gray-500'>{capital}</span>
				</div>
			</div>
		</Link>
	);
};

export default CountryItem;
