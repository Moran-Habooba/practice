import React from "react";

const Input = ({ title, error, ...rest }) => {
  return (
    <>
      <label htmlFor={rest.name}>{title}: </label>
      <input {...rest} id={rest.name} />
      <span className="text-danger">{error}</span>
    </>
  );
};

export default Input;
