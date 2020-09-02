import { MouseEvent } from 'react';

export interface ITransactionResponse {
    transactions: ITransaction[];
}

export interface ITransaction {
    accountId?: string;
    date?: Date;
    description: string;
    widthrawal?: string;
    deposit?: string;
    balance?: string;   
    onClick?: ((event: MouseEvent) => void) | undefined
}

export interface ITransactionParams {
    account: string;
    balance: string;
}

export interface IButton {
    text: string;
    color?: string;
    description?: string;
    onClick?: ((event: MouseEvent) => void) | undefined
}