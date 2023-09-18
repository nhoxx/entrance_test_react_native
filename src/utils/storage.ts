import * as SecureStore from 'expo-secure-store';
export const storage = SecureStore;

// token login
const ACCESS_TOKEN = 'accessToken';
export const setAccessToken = async (token: string) => {
    await storage.setItemAsync(ACCESS_TOKEN, token);
}
export const getAccessToken = async () => {
    return await storage.getItemAsync(ACCESS_TOKEN)
}
export const deleteAccessToken = async () => {
    return await storage.deleteItemAsync(ACCESS_TOKEN)
}
