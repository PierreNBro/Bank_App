export interface ITransaction {
    date: Date;
    description: string;
    widthrawal?: string;
    deposit?: string;
    balance: string;   
}

export interface ITransactionParams {
    account: string;
    balance: string;
}