import React, { useState } from "react";
import "./RegisterPanel.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link, useHistory } from "react-router-dom";
import firebaseApp from "../firebase/config/firebase.config";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

interface RegisterPanelProps {}

const RegisterPanel = (props: RegisterPanelProps) => {
  let history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    valid: false,
    error: ''
  });

  const handleForm = (e: any) => {
    setForm({
      ...form,
      valid: false,
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    let emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(form.email) && form.password.length >= 5) {
      setForm({
        ...form,
        valid: true
      })
      try {
        firebaseApp
          .auth()
          .createUserWithEmailAndPassword(form.email, form.password);

        alert("Account created!");
        history.push("/start/login");
      } catch (error) {
        console.log(error);
      }
    }
    else{
      setForm({
        ...form,
        valid: false,
        error: 'Incorrect email or password!'
      })
    }
  };

  

  return (
    <div className="register-panel">
      <form className="register-panel__form">
        <Input
          type="text"
          label="Email"
          name="email"
          value={form.email}
          onChange={(e) => handleForm(e)}
        />
        <Input
          type="text"
          label="Password"
          name="password"
          value={form.password}
          onChange={(e) => handleForm(e)}
        />

        {!form.valid && <ErrorMessage color="red" fontSize={15}>{form.error}</ErrorMessage>}
        <Link to="/start/login">Back to login</Link>
        <Button onClick={(e) => handleRegister(e)}>Register</Button>
      </form>
    </div>
  );
};

export default RegisterPanel;
