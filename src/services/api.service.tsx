import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect, createContext, Context } from 'react';
import { IAuthCredentials, IAuthContext, IToken } from '../models/auth.model';

export const TokenContext: Context<IAuthContext> = createContext({
    token: null,
    setToken: () => null
} as IAuthContext);

export const TokenContextProvider = (props: any) => {
    const setToken = (token: string) => {
        setState({...state, token});
    }

    const [state, setState] = useState({
        token: null,
        setToken: setToken
    } as IAuthContext);

    return (
        <TokenContext.Provider value={state}>
            {props.children}
        </TokenContext.Provider>
    );
}

export interface IResponse<T> {
    status: number;
    data: T
}

export function useAuth(opt?: AxiosRequestConfig) {
    const [response, setResponse] = useState<null | IResponse<IToken>>(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [type, setType] = useState<'signin' | 'register' | null>(null);
    const [credentials, setCredentials] = useState<null | IAuthCredentials>(null);
    
    useEffect(() => {
        if (credentials !== null && type !== null) {
            const post = async () => {
                try {
                    setLoading(true);
                    const response: IResponse<IToken> = await axios.post(`http://localhost:3000/api/auth/${type}`, credentials, opt);
                    setResponse(response);
                    setLoading(false);
                } catch(e) {
                    console.log("Error: ", e);
                    setHasError(true);
                    setLoading(false);
                }
            }
            post();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [credentials]);
    return {response, loading, hasError, setType, setCredentials};
}

export function useGet(url: string, opt: AxiosRequestConfig) {
    const [response, setResponse] = useState<null | IResponse<any>>(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const get = async () => {
            try {
                setLoading(true);
                const response: IResponse<any> = await axios.get(url, opt);
                setResponse(response);
                setLoading(false);
            } catch (e) {
                setHasError(true);
                setLoading(false);
            }
        }
        get();
    }, [url, opt]);
    return [response, loading, hasError];
}

export function usePost(url: string, opt: AxiosRequestConfig, payload: any) {
    const [response, setResponse] = useState<null | IResponse<any>>(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const post = async () => {
            try {
                setLoading(true);
                const response: IResponse<any> = await axios.post(url, payload, opt);
                setResponse(response);
                setLoading(false);
            } catch (e) {
                setHasError(true);
                setLoading(false);
            }
        }
        post();
    }, [url, payload, opt]);
    return [response, loading, hasError];
}

export function usePatch() {
    // const [response, setResponse] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [hasError, setHasError] = useState(false);
    
    // useEffect();
    // return [response, loading, hasError];
}