export enum ConversionType {
    USD = 2.0,
    CA = 1,
    MXN = .10
}

export enum AccountType {
    PRIMARY = "PRIMARY",
    JOINT = "JOINT"
}

export interface IAccount {
    accountId: string;
    balance: string;
    type?: AccountType.PRIMARY | AccountType.JOINT;
}