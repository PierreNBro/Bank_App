import React, { useContext, useEffect, useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { ITransactionParams, ITransactionResponse } from '../models/transaction.model';
import Record from './subcomponents/record.component';
import { TokenContext, useGet } from '../services/api.service';
import { AxiosRequestConfig } from 'axios';
import { IAccountSingleResponse } from '../models/account.model';
import Button from './button.component';
import Modal from './subcomponents/modal.component';

function TransactionComponent({balance}: any) {
    const [modalType, setModalType] = useState<any>(null);
    const { account }: ITransactionParams = useParams();
    const { token } = useContext(TokenContext);
    const opt: AxiosRequestConfig = {
        headers: {
            'Authorization': token
        }
    }
    const { response, loading, hasError, setUrl } = useGet<ITransactionResponse>(opt);
    const resp = useGet<IAccountSingleResponse>(opt);

    const toggleModal = (event?: MouseEvent, text?: string, description?: string) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        const modal = document.querySelector('.modal');
        if (text && description) {
            setModalType({text, description});
            modal!.classList.toggle('opacity-0');
            modal!.classList.toggle('pointer-events-none');
        } else {
            setModalType(null);
            if (!modal!.classList.contains('opacity-0')) modal!.classList.add('opacity-0');
            if (!modal!.classList.contains('pointer-events-none')) modal!.classList.add('pointer-events-none');
        }
    }

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
            <Modal text={modalType?.text} description={modalType?.description} onClick={(event) => toggleModal(event)}/>
            <div>Account: {account}</div>
            <div className="mb-8">Balance: &#36;{resp.response.data.account.balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} CAD</div>

            <div className="flex flex-row justify-between mb-8">
                <div>Transaction History:</div>
                <div>
                    <Button text="TRANSFER" color="red" onClick={(event) => toggleModal(event, 'TRANSFER', 'Transfer')}/>
                    <Button text="DEPOSIT" color="blue" onClick={(event) => toggleModal(event, 'DEPOSIT', 'Deposit')}/>
                    <Button text="WIDTHDRAW" color="green" onClick={(event) => toggleModal(event, 'WIDTHRAW', 'Widthraw')}/>
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