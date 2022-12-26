import { useContext } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

const ThemeChanger = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			className='flex items-center gap-2 cursor-pointer sm:text-base text-sm'
		>
			<span>
				{theme === 'light' ? (
					<BsFillMoonFill size={14} />
				) : (
					<HiOutlineMoon size={16} className='text-white' />
				)}
			</span>
			<span className='font-semibold'>Dark Mode</span>
		</button>
	);
};

export default ThemeChanger;
