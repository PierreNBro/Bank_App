import React from 'react';
import AuthCard from './subcomponents/auth-card.component';

function RegisterComponent() {

    return (
        <div className="z-10">
            <AuthCard buttonText1="Register" buttonText2="Sign In" url1="" url2="/auth/signin"/>
        </div>
    );
}

export default RegisterComponent;