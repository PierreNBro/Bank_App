import React, { useContext, useEffect } from 'react';
import { IAuthCard, IAuthCredentials } from '../../models/auth.model';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth, TokenContext } from '../../services/api.service';

function AuthCard({ buttonText1, buttonText2, url2 }: IAuthCard) {
    const { handleSubmit, register } = useForm();
    const { response, setType, setCredentials } = useAuth();
    const { pathname } = useLocation();
    const { setToken } = useContext(TokenContext);
    const onSubmit = (values: any) => {
        switch (pathname) {
            case '/auth/register':
                setType('register');
                break;
            case '/auth/signin':
                setType('signin');
                break;
        }

        setCredentials(values as IAuthCredentials);
    };

    useEffect(() => {
        if (response !== null) {
            console.log('Response: ', response);
            setToken(response.data.token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response])
    return (
        <div className="w-84 max-w-xs">
            <form className="bg-white shadow-md rounded p-8" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className="flex justify-center mb-4">
                    THE WORLD WIDE BANK
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        ACCOUNT ID:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="profileId" id="profileId" type="text" placeholder="Account id" ref={register} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        PASSWORD:
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" ref={register} />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">

                        {buttonText1}
                    </button>
                    <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        <Link to={url2} >{buttonText2}</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AuthCard;