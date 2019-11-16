import React from 'react';

type SearchFormProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchForm({
  setSearchTerm,
}: SearchFormProps): JSX.Element {
  return (
    <>
      <form
        id="searchForm"
        action="/"
        className="[ search__form ] [ flow ]"
        method="POST"
      >
        <label htmlFor="search">Search Cocktails</label>
        <div className="inline-field-control">
          <input
            type="text"
            name="search"
            id="search"
            autoCapitalize="none"
            autoCorrect="off"
            required
            // pattern checks if at least 3 characters or digits
            // are typed in
            pattern="([a-z0-9])3}/i"
            onChange={(evt): void => setSearchTerm(evt.target.value)}
          />
          <button type="submit" className="button">
            <span className="visually-hidden">Search Cocktails</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div aria-atomic="true" role="alert" className="search__alert"></div>
    </>
  );
}
