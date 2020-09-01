import React, { useContext, useEffect } from 'react';
import AccountComponent from '../components/account.component';
import { useGet, TokenContext } from '../services/api.service';
import { AxiosRequestConfig } from 'axios';
import { IAccount, AccountType, IAccountResponse } from '../models/account.model';

function Home() {
    const { token } = useContext(TokenContext);
    const opt: AxiosRequestConfig = {
        headers: {
            'Authorization': token
        }
    }
    const { response, loading, hasError, setUrl } = useGet<IAccountResponse>(opt);

    useEffect(() => {
        setUrl('http://localhost:3000/api/accounts');
    }, []);

    if (loading || response === null) {
        return (
            <div>Loading....</div>
        );
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="flex justify-center bg-gray-300 pt-4 w-24">
                HOME
            </div>
            <div className="flex flex-col w-11/12 h-screen p-10">
                <div className="flex flex-col justify-start h-half">
                    <div className="mb-4">Accounts:</div>
                    <div className="flex flex-row justify-start overflow-scroll">
                        {response!.data.accounts.map((account: IAccount, i: number) => (
                            account.type === AccountType.PRIMARY ?
                                <AccountComponent key={i} accountId={account.accountId} balance={account.balance} />
                                : null
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start h-half">
                    <div className="mb-4">Joint Accounts:</div>
                    <div className="flex flex-row justify-start overflow-scroll">
                        {response!.data.accounts.map((account: IAccount, i: number) => (
                            account.type === AccountType.JOINT ?
                                <AccountComponent key={i} accountId={account.accountId} balance={account.balance} />
                                : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;