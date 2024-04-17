export interface ButtonProps {
  children: React.ReactNode;
  onclick?: () => void;
  type: "primary" | "secondary";
}

export interface City {
  country: any;
  id: string;
  cityName: string;
  emoji: string;
  date: Date;
  notes: string;
  position: { lat: number; lng: number };
}

export interface CityContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: City;
  getCity: (id: string) => Promise<void>;
  createCity: (newCity: City) => Promise<void>;
  deleteCity: (id: number) => Promise<void>;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  cities: City[];
  isLoading: boolean;
  currentCity: City;
  error: string;
}

export interface AuthContextType {
  user: { name: string; email: string; avatar: string } | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export interface AuthContextState {
  user: { name: string; email: string; avatar: string };
  isAuthenticated: boolean;
}

export interface AuthContextAction {
  type: "login" | "logout";
  payload?: any;
}

export interface CityItemProps {
  city: {
    cityName: string;
    emoji: string;
    date: string;
    id: number;
    position: { lat: number; lng: number };
  };
}

export interface Country {
  emoji: string;
  country: string;
}

export interface CountryItemProps {
  country: Country;
}
