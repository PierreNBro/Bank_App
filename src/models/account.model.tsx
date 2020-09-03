export enum ConversionType {
    USD = 0.5,
    CA = 1,
    MXN = 10
}

export enum AccountType {
    PRIMARY = "PRIMARY",
    JOINT = "JOINT"
}

export interface IAccountSingleResponse {
    account: IAccount;
}

export interface IAccountResponse {
    accounts: IAccount[];
}

export interface IAccount {
    accountId: string;
    balance: string;
    type?: AccountType.PRIMARY | AccountType.JOINT;
}