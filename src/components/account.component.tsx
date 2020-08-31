import React from 'react';
import { IAccount } from '../models/account.model';

function AccountComponent({ accountId, balance }: IAccount) {
    return (
        <div className="bg-gray-300 w-84 max-w-xs h-48 shadow-md rounded p-8">
            Account: {accountId}
            <div className="text-3xl mt-8 ">Balance:</div>
            <div className="text-xl truncate whitespace-no-wrap pl-2">&#36;{balance} CAD</div>
        </div>
    );
}

export default AccountComponent;