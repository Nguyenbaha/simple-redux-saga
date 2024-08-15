// lib/api/instance.ts

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions extends Omit<RequestInit, 'method'> {
    method?: HttpMethod;
    payload?: any;
    token?: string;
}

async function fetchWithInterceptor(url: string, options: FetchOptions = {}) {
    const { method = 'GET', payload, token, ...restOptions } = options;

    const headers = new Headers(restOptions.headers || {});
    headers.set('Content-Type', 'application/json');
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const config: RequestInit = {
        ...restOptions  as any,
        method,
        headers,
    };

    if (payload && ['POST', 'PUT', 'PATCH'].includes(method)) {
        config.body = JSON.stringify(payload);
    }

    try {
        const response = await fetch(url, config);
        console.log(response)

        if (response.status >= 200 && response.status <= 201) {
            return await response.json();
        }
        throw new Error(`HTTP error! status: ${response.status}`);

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Fetch error: ${error.message}`);
        }
        throw new Error('An unknown error occurred');
    }
}

export default fetchWithInterceptor;
