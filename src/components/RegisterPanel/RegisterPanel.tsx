import React, { useState } from "react";
import "./RegisterPanel.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link, useHistory } from "react-router-dom";
import firebaseApp from "../firebase/config/firebase.config";

interface RegisterPanelProps {}

const RegisterPanel = (props: RegisterPanelProps) => {
  let history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    try {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password);
      alert("Account created!");
      history.push("/start/login");
    } catch (error) {
      console.log(error);
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
        <Link to="/start/login">Back to login</Link>
        <Button onClick={(e) => handleRegister(e)}>Register</Button>
      </form>
    </div>
  );
};

export default RegisterPanel;
