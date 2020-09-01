import React from 'react';
import AuthCard from './subcomponents/auth-card.component';

function LoginComponent() {
    return (
        <div className="z-10">
            <AuthCard buttonText1="Sign In" buttonText2="Register" url1="" url2="/auth/register"/>
        </div>
    );
}

export default LoginComponent;