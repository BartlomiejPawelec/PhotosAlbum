import React from 'react';
import './RegisterPanel.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

interface RegisterPanelProps {

}

const RegisterPanel = (props: RegisterPanelProps) => {
    return(
        <div className="register-panel">
            <form className="register-panel__form">
                {/* <Input type="text" label="Login"/>
                <Input type="text" label="Password"/>
                <Button>Register</Button> */}
                <Link to={`/login`}>Back to login</Link>
            </form>
        </div>
    )
}

export default RegisterPanel;