import React from "react";
import './Button.scss';

interface ButtonProps {
  children?: any;
  classes?: string;
  onClick: (e:any) => void;
}

const Button = (props: ButtonProps) => {
  const classes = props.classes ? `button ${props.classes}` : `button`;

  console.log('dostaje render')

  return (
    <>
      <button onClick={props.onClick} className={classes}>{props.children}</button>
    </>
  );
};

export default Button;
