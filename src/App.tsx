import React from 'react';
import SearchForm from './components/searchForm';

enum ActionType {
  LOADING_COCKTAILS = 'LOADING_COCKTAILS',
  ERROR_LOADING_COCKTAILS = 'ERROR_LOADING_COCKTAILS',
  LOADED_COCKTAILS = 'LOADED_COCKTAILS',
}

type AppState<T> =
  | { status: ActionType.LOADING_COCKTAILS }
  | { status: ActionType.ERROR_LOADING_COCKTAILS }
  | { status: ActionType.LOADED_COCKTAILS; cocktails: T };

type Action<T> =
  | { type: ActionType.LOADING_COCKTAILS }
  | { type: ActionType.ERROR_LOADING_COCKTAILS }
  | { type: ActionType.LOADED_COCKTAILS; payload: T };

type Cocktail = {
  idDrink: string;
  strDrink: string;
};

function reducer(
  state: AppState<Cocktail[]>,
  action: Action<Cocktail[]>,
): AppState<Cocktail[]> {
  switch (action.type) {
    case ActionType.LOADING_COCKTAILS:
      return {
        status: ActionType.LOADING_COCKTAILS,
      };
    case ActionType.ERROR_LOADING_COCKTAILS:
      return {
        status: ActionType.ERROR_LOADING_COCKTAILS,
      };
    case ActionType.LOADED_COCKTAILS:
      return {
        status: ActionType.LOADED_COCKTAILS,
        cocktails: action.payload,
      };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    status: ActionType.LOADING_COCKTAILS,
  });

  const [searchTerm, setSearchTerm] = React.useState('Margarita');

  const abortController = React.useRef(new AbortController());

  React.useEffect(() => {
    const fetchCocktails = async (): Promise<void> => {
      // abort the previous request to avoid
      // unnecessary data fetching
      abortController.current.abort();
      abortController.current = new AbortController();

      dispatch({ type: ActionType.LOADING_COCKTAILS });
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
          { signal: abortController.current.signal },
        );
        const jsonResponse = await response.json();
        dispatch({
          type: ActionType.LOADED_COCKTAILS,
          payload: jsonResponse.drinks as Cocktail[],
        });
      } catch (error) {
        dispatch({ type: ActionType.ERROR_LOADING_COCKTAILS });
      }
    };

    fetchCocktails();

    return (): void => {
      abortController.current.abort();
    };
  }, [searchTerm]);

  return (
    <main className="center text-center">
      <div className="[ flow ]">
        <h1 className="search__heading">TypeScript Cocktail Search</h1>
        <SearchForm setSearchTerm={setSearchTerm} />
        <section className="list">
          <ul>
            {state.status === 'ERROR_LOADING_COCKTAILS' && (
              <p>An error occured.</p>
            )}
            {state.status === 'LOADING_COCKTAILS' && <p>Loading...</p>}
            {state.status === 'LOADED_COCKTAILS' && state.cocktails ? (
              state.cocktails.map((cocktail: Cocktail, index: number) => (
                <li
                  className={`box ${index % 2 !== 0 && 'box__invert'}`}
                  key={cocktail.idDrink}
                >
                  <a
                    href={`https://www.thecocktaildb.com/drink/${cocktail.idDrink}-${cocktail.strDrink}`}
                  >
                    {cocktail.strDrink}
                  </a>
                </li>
              ))
            ) : (
              <p>No result.</p>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;
