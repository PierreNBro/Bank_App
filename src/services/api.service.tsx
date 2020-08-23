import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { prototype } from 'stream';

export interface IResponse {
    status: number;
    data: any
}

export function useGet(url: string, opt: AxiosRequestConfig) {
    const [response, setResponse] = useState<null | IResponse>(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const get = async () => {
            try {
                setLoading(true);
                const response: IResponse = await axios.get(url, opt);
                setResponse(response);
                setLoading(false);
            } catch (e) {
                setHasError(true);
                setLoading(false);
            }
        }
        get();
    }, [url]);
    return [response, loading, hasError];
}

export function usePost(url: string, opt: AxiosRequestConfig, payload: any) {
    const [response, setResponse] = useState<null | IResponse>(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const post = async () => {
            try {
                setLoading(true);
                const response: IResponse = await axios.post(url, payload, opt);
                setResponse(response);
                setLoading(false);
            } catch (e) {
                setHasError(true);
                setLoading(false);
            }
        }
        post();
    }, [url]);
    return [response, loading, hasError];
}

export function usePatch() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    // useEffect();
    return [response, loading, hasError];
}