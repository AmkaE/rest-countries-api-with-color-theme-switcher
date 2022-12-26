import type { CountryProps } from '../types/country';
import { FC } from 'react';

const formatter = new Intl.NumberFormat('en-US');

const CountryDetails: FC<CountryProps> = ({ country }) => {
	const _languages = [];
	const _currencies = [];

	const name = country?.name?.common;
	const nativeName = country?.name?.official;
	const population = country?.population;
	const region = country?.region;
	const subRegion = country?.subregion;
	const capital = country?.capital;
	const topLevelDomain = country?.tld;
	const currencies = country?.currencies;
	const languages = country?.languages;
	const borders = country?.borders;
	const flags = country?.flags;

	for (const key in languages) {
		_languages.push(languages[key]);
	}

	for (const key in currencies) {
		_currencies.push(currencies[key]);
	}

	return (
		<section className='mt-16 flex xl:flex-row flex-col md:items-center justify-between gap-4 overflow-hidden'>
			<img
				src={flags && flags[1]}
				className='md:max-w-2xl xmd:max-w-lg w-full xmd:h-96 sm:h-80 h-60 bg-gray-500 shadow-lg'
			/>
			<div className='flex flex-col gap-8 lg:p-4 pt-4 bg-whites md:max-w-2xl w-full justify-between'>
				<h1 className='text-2xl font-bold dark:text-white-dm-text'>{name}</h1>
				<section className='flex md:flex-row flex-col justify-between gap-8'>
					{/* details right */}
					<section>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Native Name:
							</span>
							<span className='text-gray-500'>{nativeName}</span>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Population:
							</span>
							<span className='text-gray-500'>
								{formatter.format(population)}
							</span>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Region:
							</span>
							<span className='text-gray-500'>{region}</span>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Sub Region:
							</span>
							<span className='text-gray-500'>{subRegion}</span>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Capital:
							</span>
							<span className='text-gray-500'>{capital}</span>
						</div>
					</section>

					{/* details left */}
					<section>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Top level Domain:
							</span>
							<span className='text-gray-500'>{topLevelDomain}</span>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Currencies:
							</span>
							<>
								{_currencies?.map((currency: any) => (
									<span key={currency.name} className='text-gray-500'>
										{currency?.name}
									</span>
								))}
							</>
						</div>
						<div>
							<span className='text-sm font-semibold mr-2 dark:text-white-dm-text'>
								Languages:
							</span>
							<span className='text-gray-500'>{_languages.join(', ')}</span>
						</div>
					</section>
				</section>
				<div className='flex xl:items-center xl:flex-row flex-col flex-wrap gap-4'>
					<h1 className='font-semibold smmb-4 dark:text-white-dm-text'>
						Border Countries:
					</h1>
					<div className='flex xmd:flex-row flex-col flex-wrap gap-4 text-sm'>
						{borders?.map(border => (
							<span
								key={border}
								className='rounded-sm shadow-md px-4 py-1 max-w-fit bg-very-light-gray dark:bg-dark-blue-dm-el dark:text-white-dm-text'
							>
								{border}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CountryDetails;
