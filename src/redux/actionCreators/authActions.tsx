import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import axios from '../../services/axios';

import { IAuth as Auth } from '../../models/auth';
import { ThunkResult } from './actionResultTypes';
import { 
    Action,
    ActionType, 
    IAuthFail, 
    IAuthStart, 
    IAuthSuccess 
} from '../actionTypes/authActionTypes';

// Headers
type Config = {
    headers: Record<string, string>
};
   
export const AuthStart = (username: string, password: string): ThunkResult<void> => 
    async (dispatch: Dispatch<Action>) => {
        dispatch<IAuthStart>({ type: ActionType.AUTH_START 
    });
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
        dispatch<IAuthSuccess>({
            type: ActionType.AUTH_SUCCESS,
            payload: response.data
        });
    } catch (err: any) {
        dispatch<IAuthFail>({
            type: ActionType.AUTH_FAIL,
            payload: err
        });    
    }
};




