import React from 'react';
import { ITransaction } from '../../models/transaction.model';

function Record({accountId, description, balance, deposit, widthrawal}:ITransaction) {
    return (
        <div className="flex flex-row justify-between px-4 border-b-2 border-gray-400">
            <div>{accountId}</div>
            <div>{description}</div>
            <div>{widthrawal}</div>
            <div>{deposit}</div>
            <div>{balance}</div>
        </div>
    );
}

export default Record;