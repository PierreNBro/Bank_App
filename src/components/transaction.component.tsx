import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ITransactionParams, ITransactionResponse } from '../models/transaction.model';
import Record from './subcomponents/record.component';
import { TokenContext, useGet } from '../services/api.service';
import { AxiosRequestConfig } from 'axios';
import { IAccountSingleResponse } from '../models/account.model';
import Button from './button.component';
import Modal from './subcomponents/modal.component';

function TransactionComponent({balance}: any) {
    const { account }: ITransactionParams = useParams();
    const { token } = useContext(TokenContext);
    const opt: AxiosRequestConfig = {
        headers: {
            'Authorization': token
        }
    }
    const { response, loading, hasError, setUrl } = useGet<ITransactionResponse>(opt);
    const resp = useGet<IAccountSingleResponse>(opt);

    useEffect(() => {
        setUrl('http://localhost:3000/api/accounts/transaction');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        resp.setUrl(`http://localhost:3000/api/accounts/${account}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (hasError || resp.hasError) {
        return (
            <div>Error</div>
        );
    }

    if (loading || response === null || resp.loading || resp.response === null) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="flex flex-col h-102">
            <Modal text="DEPOSIT"/>
            <div>Account: {account}</div>
            <div className="mb-8">Balance: &#36;{resp.response.data.account.balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} CAD</div>

            <div className="flex flex-row justify-between mb-8">
                <div>Transaction History:</div>
                <div>
                    <Button text="TRANSFER" color="red" />
                    <Button text="DEPOSIT" color="blue" />
                    <Button text="WIDTHDRAW" color="green" />
                </div>
            </div>
            <div className=" bg-gray-500 flex flex-row justify-between px-4 border-b-2 border-black">
                <div>Account</div>
                <div>Details</div>
                <div>Widthraw</div>
                <div>Deposit</div>
                <div>Balance</div>
            </div>
            <div className="bg-gray-300 w-full h-full max-h-30 overflow-scroll">
                {response!.data.transactions ? response!.data.transactions.map((transaction, i) => (
                    <Record
                        key={i}
                        accountId={account}
                        widthrawal={transaction.widthrawal}
                        deposit={transaction.deposit}
                        balance={transaction.balance}
                        description={transaction.description}
                        date={transaction.date}
                    />
                )) : null}

            </div>
        </div>
    );
}

export default TransactionComponent;