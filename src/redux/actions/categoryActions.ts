import { Alert } from 'react-native';
import { CATEGORIES } from '../../networking/ApiUrl';
import client from '../../networking/ConfigApi';
import { checkStatusCode2xx } from '../../utils/helper';
import {
    SET_CATEGORY,
    SET_MODAL_LOADING
} from '../actions/actionTypes';

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: SET_MODAL_LOADING, payload: true });
        const res: any = await client.get(CATEGORIES);
        if (checkStatusCode2xx(res.status)) {
            dispatch({ type: SET_CATEGORY, payload: res.data })
        } else {
            Alert.alert(res.data?.message)
        }
    } catch (error) {
    } finally {
        dispatch({ type: SET_MODAL_LOADING, payload: false });
    }
};
