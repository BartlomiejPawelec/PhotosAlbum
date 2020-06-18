import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps{
    children?:any;
    fontSize: number;
    color: string;
}



const ErrorMessage = (props:ErrorMessageProps) => {
    const LabelStyled = styled.div`
    color: ${props.color};
    fontSize: ${props.fontSize};
`
    return(
        <LabelStyled>
            <label className="error-message">{props.children}</label>
        </LabelStyled>
    )
}

export default ErrorMessage;