import { Alert } from 'react-native';
import { NavigationService } from '../../navigation/NavigationService';
import { Routes } from '../../navigation/Routes';
import { SIGN_IN, SIGN_UP } from '../../networking/ApiUrl';
import client from '../../networking/ConfigApi';
import { checkStatusCode2xx } from '../../utils/helper';
import {
    SET_MODAL_LOADING,
    SET_USER_INFOR
} from '../actions/actionTypes';
import { setAccessToken } from '../../utils/storage';

export const signUp = (values: { email: string, password: string, }) => async (dispatch) => {
    try {
        dispatch({ type: SET_MODAL_LOADING, payload: true });
        const res: any = await client.post(SIGN_UP, {
            email: values.email,
            password: values.password,
        });
        if (checkStatusCode2xx(res.status)) {
            const respone: any = await client.post(SIGN_IN, {
                email: values.email,
                password: values.password,
            });
            if (checkStatusCode2xx(respone.status)) {
                await setAccessToken(respone.data?.accessToken)
                dispatch({ type: SET_USER_INFOR, payload: respone.data?.user })
                NavigationService.navigate(Routes.Categorires)
            } else {
                Alert.alert(respone.data?.message)
            }
        } else {
            Alert.alert(res.data?.message)
        }
    } catch (error) {
    } finally {
        dispatch({ type: SET_MODAL_LOADING, payload: false });
    }
};
