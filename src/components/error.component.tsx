import React from 'react';
import { IError } from '../models/error.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function ErrorComponent({ message }: IError) {
    return (
        <div id="error-component" className="flex fixed justify-center items-center h-screen w-screen z-30">
            <div className="fixed h-screen w-screen bg-gray-900 bg-opacity-75 z-30"></div>
            <div className="flex flex-col w-40 h-40 rounded overflow-hidden shadow-lg bg-gray-900 z-40">
                <div className="flex flex-1 justify-center items-center pt-1"><FontAwesomeIcon icon={faTimesCircle} color="red" size="3x"/></div>
                <div className="flex flex-1 justify-center items-center text-white text-sm">{message}</div>
                <div className="flex justify-center items-center my-2">
                <button className="bg-indigo-500 py-1 px-2 rounded text-white hover:bg-indigo-400">CANCEL</button>
                </div>
                
            </div>
        </div>
    );
}

export default ErrorComponent;