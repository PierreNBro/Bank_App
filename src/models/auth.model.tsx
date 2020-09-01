export interface IAuthCard {
    buttonText1: string;
    buttonText2: string;
    url1: string;
    url2: string;
}

export interface IAuthCredentials {
    profileId: string;
    password: string;
}

export interface IAuthContext {
    token: string | null;
    setToken: (token: string) => null;

}

export interface IToken {
    token: string;
}