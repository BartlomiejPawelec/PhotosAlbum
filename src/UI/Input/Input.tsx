import React from "react";
import './Input.scss';

interface InputProps {
  type: string;
  classes?: string;
  label?: string;
  value: string;
  name?:string;
  onChange: (e:any) => void;
}

const Input = (props: InputProps) => {
  const classes = props.classes ? `input ${props.classes}` : `input`;

  return (
    <>
      {props.label && <label className="input__label">{props.label}:</label>}
      <input type={props.type} className={classes} value={props.value} name={props.name} onChange={props.onChange} />
    </>
  );
};

export default Input;
