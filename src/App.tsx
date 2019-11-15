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

const App: React.FC = () => {
  return (
    <main className="center text-center">
      <div className="[ flow ]">
        <h1 className="search__heading">TypeScript Cocktail Search</h1>
        <SearchForm />
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
