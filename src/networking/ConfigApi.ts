import { create } from 'apisauce';
import { getAccessToken } from '../utils/storage';
const BASE_URL = 'http://streaming.nexlesoft.com:3001';
export const httpClient = create({
    baseURL: BASE_URL,
    timeout: 60000,

});

async function getConfig(config: any) {
    const accessToken = await getAccessToken();
    return {
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
        ...config
    }
}
const client = {
    async get<T>(url: string, params?: {} | undefined, config?: any) {
        const _config = await getConfig(config);
        return await httpClient.get<T>(url, params, _config);
    },
    async post<T>(url: string, params?: any, config?: any) {
        const _config = await getConfig(config);
        return await httpClient.post<T>(url, params, _config)
    }
}

export default client;