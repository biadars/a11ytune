import * as React from 'react';

export type ButtonProps = {
  label: string;
  loading: boolean;
  onClick: () => void;
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      className="rounded shadow bg-teal-800 hover:bg-teal-900 border border-teal-900 p-3 text-sm"
      disabled={props.loading}
      onClick={props.onClick}>
      {props.label}
    </button>
  );
};
