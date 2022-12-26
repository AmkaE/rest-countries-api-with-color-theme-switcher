import { Partial } from 'typescript';

type WithUnknownKeys = { [prop: string]: string };
type CountryFlags = string[] | { png: string; svg: string };

type ExpectedDataType = 'ALL' | 'NAME';

type CountriesAction =
	| { type: 'FETCH_COUNTRIES'; payload: Country[] }
	| { type: 'FETCH_COUNTRY'; payload: Country }
	| { type: 'SEARCH_COUNTRY_BY_NAME'; payload: Country[] }
	| { type: 'FILTER_BY_REGION'; payload: Country[] }
	| { type: 'SET_LOADING' };

type CountriesData = Country[];

type CountryData = Country;

type CountriesReducerState = {
	countries: CountriesData;
	country: Partial<CountryData>;
	isLoading: boolean;
};

interface CountryDetailsProps {
	countryName: string;
}

interface CountryProps {
	country: CountryData;
}

interface CountriesProviderProps {
	children: ReactNode;
}

interface CountriesContextType {
	countries: CountriesData;
	country: Partial<CountryData>;
	isLoading: boolean;
	dispatch: Dispatch<CountriesAction>;
}

interface Country {
	altSpellings: string[];
	area: number;
	borders: string[];
	capital: string[];
	capitalInfo: {
		latlng: number[];
	};
	car: {
		side: string;
		signs: string;
	};
	cca2: string;
	cca3: string;
	ccn3: string;
	cioc: string;
	coatOfArms: {
		png: string;
		svg: string;
	};
	continents: string;
	currencies: WithUnknownKeys;
	demonym: string;
	fifa: string;
	flag: string;
	flags: Flags;
	idd: {
		root: string;
		suffixes: string[];
	};
	independent: boolean;
	landlocked: boolean;
	languages: WithUnknownKeys;
	latlng: number[];
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
	name: {
		common: string;
		official: string;
		nativeName: WithUnknownKeys;
	};
	population: number;
	region: string;
	startOfWeek: string;
	status: string;
	subregion: string;
	timezones: string[];
	tld: string[];
	unMember: boolean;
	translations: WithUnknownKeys;
}
