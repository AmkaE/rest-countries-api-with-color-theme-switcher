import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* ------------- context providers ------------ */
import { ThemeProvider } from './context/ThemeContext';

/* ------------- react toastify ------------ */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* ----------- pages ----------- */
import Home from './pages/home';
import Country from './pages/country';

/* ----------- components ----------- */
import Navbar from './components/Navbar';
import { CountriesProvider } from './context/CountriesContext';

const App = () => {
	return (
		<Router>
			<CountriesProvider>
				<ThemeProvider>
					<div className='font-nunito-sans bg-very-light-gray h-screen overflow-y-auto dark:bg-very-dark-blue-dm-bg'>
						<Navbar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/:countryName' element={<Country />} />
							<Route path='*' element={<h1>404 page not found</h1>} />
						</Routes>
					</div>
					<ToastContainer />
				</ThemeProvider>
			</CountriesProvider>
		</Router>
	);
};

export default App;
