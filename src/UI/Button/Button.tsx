import React from "react";
import './Button.scss';

interface ButtonProps {
  children?: any;
  classes?: string;
}

const Button = (props: ButtonProps) => {
  const classes = props.classes ? `button ${props.classes}` : `button`;
  return (
    <>
      <button className={classes}>{props.children}</button>
    </>
  );
};

export default Button;
