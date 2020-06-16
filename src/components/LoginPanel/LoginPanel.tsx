import React, { useState, useCallback, useMemo } from "react";
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

  const handleForm = useCallback(
    (e: any) => {
      console.log("juz");
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Form State:", form);
  };

  const LoginButton = useMemo(() => {
    return <Button onClick={(e) => handleLogin(e)}>Login</Button>;
  }, [handleLogin]);

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
        <Link to={`/register`}>Register</Link>
        {LoginButton}
      </form>
    </div>
  );
};

export default LoginPanel;
