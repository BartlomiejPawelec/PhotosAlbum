import React from "react";

interface InputProps {
  type: string;
  classes?: string;
}

const Input = (props: InputProps) => {
  const classes = props.classes ? `input ${props.classes}` : `input`;

  return (
    <>
      <input type={props.type} className={classes} />
    </>
  );
};

export default Input;
