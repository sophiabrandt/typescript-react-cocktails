import React from 'react';
import SearchForm from './components/searchForm';

type AppState<T> =
  | { status: 'LOADING_COCKTAILS' }
  | { status: 'ERROR_LOADING_COCKTAILS' }
  | { status: 'LOADED_COCKTAILS'; cocktails: T };

type Action<T> =
  | { type: 'LOADING_COCKTAILS' }
  | { type: 'ERROR_LOADING_COCKTAILS' }
  | { type: 'LOADED_COCKTAILS'; payload: T };

type Cocktail = {
  idDrink: string;
  strDrink: string;
};

function reducer(state: AppState<string>, action: Action<any>): AppState<any> {
  switch (action.type) {
    case 'LOADING_COCKTAILS':
      return {
        status: 'LOADING_COCKTAILS',
      };
    case 'ERROR_LOADING_COCKTAILS':
      return {
        status: 'ERROR_LOADING_COCKTAILS',
      };
    case 'LOADED_COCKTAILS':
      return {
        status: 'LOADED_COCKTAILS',
        cocktails: action.payload as Cocktail[],
      };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    status: 'LOADING_COCKTAILS',
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
        dispatch({
          type: 'LOADED_COCKTAILS',
          payload: jsonResponse.drinks as Cocktail[],
        });
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
            {state.status === 'ERROR_LOADING_COCKTAILS' && (
              <p>An error occured.</p>
            )}
            {state.status === 'LOADING_COCKTAILS' && <p>Loading>..</p>}
            {state.status === 'LOADED_COCKTAILS' &&
              state.cocktails.map((cocktail: Cocktail, index: number) => (
                <li
                  className={`box ${index % 2 !== 0 && 'box__invert'}`}
                  key={cocktail.idDrink}
                >
                  {cocktail.strDrink}
                </li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;
