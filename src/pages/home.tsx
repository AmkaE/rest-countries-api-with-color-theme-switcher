import CountriesList from '../components/CountriesList';
import Filter from '../components/Filter';
import SearchForm from '../components/SearchForm';

const Home = () => {
	return (
		<>
			<div className='max-w-7.5xl m-auto mt-16 px-4 flex xmd:flex-row flex-col gap-4 justify-between items-center'>
				<SearchForm />
				<Filter />
			</div>
			<CountriesList />
		</>
	);
};

export default Home;
