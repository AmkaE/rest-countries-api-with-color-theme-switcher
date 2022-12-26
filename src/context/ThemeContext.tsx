import { createContext, useState, FC, useEffect } from 'react';

const defaultContext: ThemeContextType = {
	theme: 'light',
	toggleTheme: () => {},
};

// Get the initial theme from local storage or user preference
const getInitialTheme = (): string => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const preferedTheme = window.localStorage.getItem('color-theme');

		if (preferedTheme) {
			return preferedTheme;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

		if (userMedia.matches) {
			return 'dark';
		}
	}

	return 'light';
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	// State to hold the selected theme name
	const [theme, setTheme] = useState(getInitialTheme);

	// Retrieve the theme object by theme name
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	// Set the theme on initial render
	const setInitial = (initialTheme: string) => {
		const root = window.document.documentElement;
		const isDark = initialTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(initialTheme);

		localStorage.setItem('color-theme', initialTheme);
	};

	useEffect(() => {
		setInitial(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
