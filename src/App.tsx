import React from 'react';
import SearchForm from './components/searchForm';

type Cocktail = {
  cocktailId: string;
  cocktailName: string;
};

const dummyCocktails: Cocktail[] = [
  { cocktailId: '11007', cocktailName: 'Margarita' },
  { cocktailId: '5652', cocktailName: 'Rum Coke' },
  { cocktailId: '7876', cocktailName: 'Caipirinha' },
  { cocktailId: '1572', cocktailName: 'Long Island Ice Tea' },
];

type AppState = {
  isLoading: boolean;
  isError: boolean;
  cocktails: Cocktail[];
};

type Action =
  | { type: 'FETCH_INIT'; payload: string }
  | { type: 'FETCH_SUCCESS'; payload: Cocktail[] }
  | { type: 'FETCH_FAILURE'; payload: string };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cocktails: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const initialData: AppState = {
    isLoading: false,
    isError: false,
    cocktails: [],
  };
  const [state, dispatch] = React.useReducer(reducer, initialData);
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <main className="center text-center">
      <div className="[ flow ]">
        <h1 className="search__heading">TypeScript Cocktail Search</h1>
        <SearchForm setSearchTerm={setSearchTerm} />
        <section className="list">
          <ul className="[flow]">
            {dummyCocktails.map((cocktail, index) => (
              <li
                className={`box ${index % 2 !== 0 && 'box__invert'}`}
                key={cocktail.cocktailId}
              >
                {cocktail.cocktailName}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;
