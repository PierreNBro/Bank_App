import React from 'react';
import { IButton } from '../models/transaction.model';


function Button({text, color}: IButton) {
    return (
    <button className={`bg-transparent hover:bg-blue-500 text-${color}-700 font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded`}>{text}</button>
    );
}

