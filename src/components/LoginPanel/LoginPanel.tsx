import React, { useState, useContext } from "react";
import "./LoginPanel.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link, useHistory, Redirect } from "react-router-dom";
import firebaseApp from "../firebase/config/firebase.config";
import { AuthContext } from "../../Auth/Auth";

interface LoginPanelProps {}

const LoginPanel = (props: LoginPanelProps) => {
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

  const handleLogin = (e: any) => {
    e.preventDefault();
    try {
      firebaseApp.auth().signInWithEmailAndPassword(form.email, form.password);
      history.push("/album");
    } catch (error) {
      console.log(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/album" />;
  }

  return (
    <div className="login-panel">
      <form className="login-panel__form">
        <Input
          type="text"
          label="Email"
          value={form.email}
          name="email"
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
