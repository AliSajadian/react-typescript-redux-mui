import { Reducer } from 'redux';

import { IAuth as Auth } from '../../models/auth';
import { IUser } from '../../models/user';
import { Action, ActionType } from '../actionTypes/authActionTypes';


export interface IAuthState {
    authToken : string ,
    isPasswordChanged: boolean,
    user : IUser | undefined | null;
    loading: boolean;
    error? : string | null;
}

const initialState = {
    authToken : "test" ,
    isPasswordChanged: false,
    user : null , 
    loading: false,
    error : null
}

export const AuthReducer: Reducer<IAuthState, Action> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionType.AUTH_START:
            return { ...state, loading: true };

        case ActionType.AUTH_SUCCESS:
            const auth: Auth = action.payload
            return {
                ...state,
                authToken : auth.authToken , 
                user : auth.user ,
                error : null , 
                loading: false
            };
        case ActionType.AUTH_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};