import React from 'react';
import { ErrorState } from './searchForm';

type InputAlertProps = {
  errorState: ErrorState;
};

export default function InputAlert({
  errorState,
}: InputAlertProps): JSX.Element {
  return (
    <figure className="alert" data-state={errorState.type}>
      <svg
        className="alert__icon"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d={errorState.iconPath} />
      </svg>
      <p className="alert__content">{errorState.message}</p>
    </figure>
  );
}
