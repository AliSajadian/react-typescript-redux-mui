import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import axios from '../../services/axios';
import History from '../../history';
import { IAuth as Auth } from '../../models/auth';
import { AuthActionTypes } from '../constants';
import { ThunkResult } from './actionTypes';
import { IAuthFail, IAuthStart, IAuthSuccess } from './authActionsContracts';

// Headers
type Config = {
    headers: Record<string, string>
};
   
export const AuthStart = (username: string, password: string, history: History): ThunkResult<void> => async dispatch => {
    handleFetchCompany(dispatch);
    // Request Header
    const config: Config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // Request Body
    const body = JSON.stringify({
        username,
        password
    });
    try {
        const response: AxiosResponse<Auth> = await axios.post(`/auth/login`, body, config);
        handleFetchCompanySuccess(dispatch, response.data);
    } catch (e) {
        handleFetchCompanyFail(dispatch);
    }
};
export const handleFetchCompany = (dispatch: Dispatch<IAuthStart>) => {
    dispatch({ type: AuthActionTypes.AUTH_START });
};
const handleFetchCompanySuccess = (
    dispatch: Dispatch<IAuthSuccess>,
    response: Auth
) => {
    dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response
    });
};
const handleFetchCompanyFail = (dispatch: Dispatch<IAuthFail>) => {
    dispatch({
        type: AuthActionTypes.AUTH_FAIL
    });
};

export type AuthActions =
    | IAuthStart
    | IAuthSuccess
    | IAuthFail;

