import React from 'react';
import SearchForm from './components/searchForm';

type AppState = {
  isLoading: boolean;
  isError: boolean;
  cocktails: Array<any>;
};

type Action =
  | { type: 'LOADING_COCKTAILS' }
  | { type: 'ERROR_LOADING_COCKTAILS' }
  | { type: 'LOADED_COCKTAILS'; payload: Array<string> };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'LOADING_COCKTAILS':
      return {
        ...state,
        isLoading: true,
      };
    case 'ERROR_LOADING_COCKTAILS':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'LOADED_COCKTAILS':
      return {
        ...state,
        isLoading: false,
        cocktails: action.payload,
      };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    isError: false,
    isLoading: false,
    cocktails: [],
  });
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    const fetchCocktails = async (): Promise<any> => {
      dispatch({ type: 'LOADING_COCKTAILS' });
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        );
        const jsonResponse = await response.json();
        dispatch({ type: 'LOADED_COCKTAILS', payload: jsonResponse.drinks });
      } catch (error) {
        dispatch({ type: 'ERROR_LOADING_COCKTAILS' });
      }
    };

    fetchCocktails();
  }, [searchTerm]);

  console.log(state);

  return (
    <main className="center text-center">
      <div className="[ flow ]">
        <h1 className="search__heading">TypeScript Cocktail Search</h1>
        <SearchForm setSearchTerm={setSearchTerm} />
        <section className="list">
          <ul className="[flow]">
            {state.isError && <p>An error occured.</p>}
            {state.isLoading ? (
              <p>Loading>..</p>
            ) : (
              state.cocktails.map((cocktail, index) => (
                <li
                  className={`box ${index % 2 !== 0 && 'box__invert'}`}
                  key={cocktail.idDrink}
                >
                  {cocktail.strDrink}
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;
