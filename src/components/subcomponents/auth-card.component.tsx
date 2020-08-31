import React from 'react';
import { IAuthCard } from '../../models/auth.model';
import { Link } from 'react-router-dom';

function AuthCard({ buttonText1, buttonText2, url1, url2 }: IAuthCard) {
    return (
        <div className="w-84 max-w-xs">
            <form className="bg-white shadow-md rounded p-8">
                <div className="flex justify-center mb-4">
                    THE WORLD WIDE BANK
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        ACCOUNT ID:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        PASSWORD:
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <Link to={url1}>{buttonText1}</Link>
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    <Link to={url2} >{buttonText2}</Link>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default AuthCard;