import React from 'react';
import InputAlert from './inputAlert';

type SearchFormProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

type InputError = {
  type: string;
  message: string;
  iconPath: string;
};

type InputSuccess = {
  type: string;
  message: string;
  iconPath: string;
};

export type ErrorState = InputError | InputSuccess;

const inputError: InputError = {
  type: 'error',
  message: 'Please search for at least 3 characters.',
  iconPath:
    'M11.148 4.374a.973.973 0 01.334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133a.994.994 0 01-.155 1.192.99.99 0 01-.693.301H3.533a.997.997 0 01-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 002.572-4.507L14.568 3.346a2.995 2.995 0 00-4.123-1.014c-.429.26-.775.615-1.012 1.014zM11 9v4a1 1 0 002 0V9a1 1 0 00-2 0zm2 8a1 1 0 10-2 0 1 1 0 002 0z',
};

const inputSuccess: InputSuccess = {
  type: 'success',
  message: "Yay! You'll see the search results below.",
  iconPath:
    'M19.293 5.293L9 15.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l11-11a.999.999 0 10-1.414-1.414z',
};

export default function SearchForm({
  setSearchTerm,
}: SearchFormProps): JSX.Element {
  const [inputTerm, setInputTerm] = React.useState('');
  const [errorState, setErrorState] = React.useState(inputError);

  const searchRef = React.useRef<HTMLInputElement>(null);
  const formElementRef = React.useRef<HTMLFormElement>(null);
  const alertElementRef = React.useRef<HTMLInputElement>(null);
  /* get regex pattern from HTML Element, or
     use static fallback */
  const validationRegex = new RegExp(
    (searchRef &&
      searchRef.current &&
      searchRef.current.getAttribute('pattern')) ||
      '([a-zA-Z0-9].*?){3}',
  );

  function validate(): void {
    /* remove HTML validation attributes
       if using JavaScript;
       handles user feedback with role="alert" element */
    if (searchRef && searchRef.current) {
      searchRef.current.removeAttribute('required');
      searchRef.current.removeAttribute('pattern');
    }
    if (formElementRef && formElementRef.current) {
      formElementRef.current.setAttribute('novalidate', '');
    }
  }

  validate();

  function handleSubmit(evt: React.SyntheticEvent): void {
    evt.preventDefault();

    if (!validationRegex.test(inputTerm.trim())) {
      setErrorState(inputError);
      if (searchRef && searchRef.current) {
        searchRef.current.setAttribute('aria-invalid', 'true');
      }
      return;
    }

    // required because arria-invalid will be true if
    // triggering the error state first
    if (searchRef && searchRef.current) {
      searchRef.current.removeAttribute('aria-invalid');
    }

    setSearchTerm(inputTerm);
    setErrorState(inputSuccess);
  }

  return (
    <>
      <form
        id="searchForm"
        action="/"
        className="[ search__form ] [ flow ]"
        method="POST"
        ref={formElementRef}
        onSubmit={(evt): void => handleSubmit(evt)}
      >
        <label htmlFor="search">Search Cocktails</label>
        <div className="inline-field-control">
          <input
            type="text"
            name="search"
            id="search"
            autoCapitalize="none"
            autoCorrect="off"
            ref={searchRef}
            required
            // pattern checks if at least 3 characters or digits
            // are typed in
            pattern="([a-zA-Z0-9].*?){3}"
            onChange={(evt): void => setInputTerm(evt.target.value)}
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
      <div
        aria-atomic="true"
        role="alert"
        ref={alertElementRef}
        className="search__alert"
      >
        <InputAlert errorState={errorState} />
      </div>
    </>
  );
}
