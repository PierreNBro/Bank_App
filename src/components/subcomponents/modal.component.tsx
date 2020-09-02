import React, { useState, useEffect, useContext } from 'react';
import { ITransaction, ITransactionResponse } from '../../models/transaction.model';
import { AxiosRequestConfig } from 'axios';
import { TokenContext, usePost } from '../../services/api.service';

function Modal({ accountId, description, widthrawal, deposit, onClick }: ITransaction) {
    const { token } = useContext(TokenContext);
    const [totalAmount, setTotalAmount] = useState<null | string>(null);
    const [amount, setAmount] = useState('');
    const [cent, setCent] = useState('00');
    const opt: AxiosRequestConfig = {
        headers: {
            'Authorization': token
        }
    }
    const { setUrl, setPayload } = usePost<ITransactionResponse, ITransaction>(opt);

    const convertTotal = (amount: string, cent: string) => {
        setTotalAmount(`${amount}.${cent}`);
    }

    useEffect(() => {
        setUrl('http://localhost:3000/api/accounts/transaction');
    }, []);

    useEffect(() => {
        if (totalAmount !== null) {
            const transaction: ITransaction = {
                accountId: accountId,
                description: description,
                widthrawal: widthrawal,
                deposit: deposit
            }
            setPayload(transaction);
            console.log(totalAmount);
        }

    }, [totalAmount])

    return (
        <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClick}></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">

                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold mb-2">Transaction</p>
                        <div className="modal-close cursor-pointer z-50" onClick={onClick}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">{description} Amount:</label>
                        <div className="flex flex-row">
                            &#36;<input className="shadow appearance-none border rounded w-full mr-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={!isNaN(Number(amount.replace(/,/g, ''))) ? Number(amount.replace(/,/g, '')).toLocaleString() : '0'} onChange={event => setAmount(event.currentTarget.value)} />
                            <input className="text-center shadow appearance-none border rounded w-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={cent} onChange={event => setCent(('00' + Number(event.currentTarget.value)).slice(-2))} />
                        </div>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2" onClick={() => convertTotal(amount, cent)}>{description}</button>
                        <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick={onClick}>CANCEL</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Modal;