import React from 'react';
import { useParams } from 'react-router-dom';
import { ITransactionParams } from '../models/transaction.model';
import Record from './subcomponents/record.component';

function TransactionComponent() {
    const { account, balance }: ITransactionParams = useParams();
    return (
        <div className="flex flex-col h-102">
            <div>Account: {account}</div>
            <div className="mb-8">Balance: &#36;50,000.00 CAD</div>
            
            <div>Transaction History:</div>
            <div className=" bg-gray-500 flex flex-row justify-between px-4 border-b-2 border-black">
                <div>Account</div>
                <div>Details</div>
                <div>Widthraw</div>
                <div>Deposit</div>
                <div>Balance</div>
            </div>
            <div className="bg-gray-300 w-full h-full max-h-30 overflow-scroll">

                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
                <Record />
            </div>
        </div>
    );
}

export default TransactionComponent;