import React from 'react';
import { ITransaction } from '../../models/transaction.model';

function Record({accountId, description, balance, deposit, widthrawal}:ITransaction) {
    return (
        <div className="flex flex-row justify-between px-4 border-b-2 border-gray-400">
            <div className="flex-1">{accountId}</div>
            <div className="flex-1">{description}</div>
            <div className="flex-1">{widthrawal}</div>
            <div className="flex-1">{deposit}</div>
            <div className="flex justify-end">{balance}</div>
        </div>
    );
}

export default Record;