import { Link } from 'react-router-dom';
import ThemeChanger from './ThemeChanger';

const Navbar = () => {
	return (
		<header className='w-full shadow-lg h-20 bg-very-light-gray dark:bg-dark-blue-dm-el dark:text-white-dm-text'>
			<nav className='h-full max-w-7.5xl m-auto flex items-center justify-between px-4'>
				<Link to='/'>
					<h1 className='sm:text-2xl text-md font-bold'>Where in the world?</h1>
				</Link>
				<ThemeChanger />
			</nav>
		</header>
	);
};

export default Navbar;
