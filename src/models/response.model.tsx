import { IAccount } from "./account.model";
import { ITransaction } from "./transaction.model";

export interface ICreatedResponse {
    message: string;
}

export interface IAuthResponse {
    token: string;
}

export interface IAccountResponse {
    accounts: IAccount[];
}

export interface ITransactionResponse {
    transactions: ITransaction[];
}

