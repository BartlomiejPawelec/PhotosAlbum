import React from "react";
import "./Button.scss";

interface ButtonProps {
  children?: any;
  classes?: string;
  onClick: (e: any) => void;
}

const Button = React.memo((props: ButtonProps) => {
  const classes = props.classes ? `button ${props.classes}` : `button`;

  return (
    <>
      <button onClick={props.onClick} className={classes}>
        {props.children}
      </button>
    </>
  );
});

export default Button;
