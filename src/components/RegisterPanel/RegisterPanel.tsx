import React, { useState } from "react";
import "./RegisterPanel.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

interface RegisterPanelProps {}

const RegisterPanel = (props: RegisterPanelProps) => {
  const [form, setForm] = useState({
    login: "",
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
    console.log("Form State:", form);
  };
  return (
    <div className="register-panel">
      <form className="register-panel__form">
        <Input
          type="text"
          label="Login"
          value={form.login}
          onChange={(e) => handleForm(e)}
        />
        <Input
          type="text"
          label="Password"
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
