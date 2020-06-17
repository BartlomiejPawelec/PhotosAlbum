import React, { useState } from "react";
import "./LoginPanel.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

interface LoginPanelProps {}

const LoginPanel = (props: LoginPanelProps) => {
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

  const handleLogin = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="login-panel">
      <form className="login-panel__form">
        <Input
          type="text"
          label="Login"
          value={form.login}
          name="login"
          onChange={(e) => handleForm(e)}
        />
        <Input
          type="text"
          label="Password"
          value={form.password}
          name="password"
          onChange={(e) => handleForm(e)}
        />
        <Link to={`/start/register`}>Don't have account?</Link>
        <Button onClick={(e) => handleLogin(e)}>Login</Button>
      </form>
    </div>
  );
};

export default LoginPanel;
