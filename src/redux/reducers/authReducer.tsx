import { Reducer } from 'redux';
import { AuthActions } from '../actions/auth/authActions';
import { AuthActionTypes } from '../constants';
import { IAuth as Auth } from '../../models/auth';
import { IUser } from '../../models/user';


export interface IAuthState {
    authToken : string ,
    isPasswordChanged: boolean,
    user : IUser | undefined | null;
    loading: boolean;
    error? : string | null;
}

const initialState = {
    authToken : "" ,
    isPasswordChanged: false,
    user : null , 
    loading: false,
    error : null
}

export const AuthReducer: Reducer<IAuthState, AuthActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AuthActionTypes.AUTH_START:
            return { ...state, loading: true };

        case AuthActionTypes.AUTH_SUCCESS:
            const auth: Auth = action.payload
            return {
                ...state,
                authToken : auth.authToken , 
                user : auth.user ,
                error : null , 
                loading: false
            };
        case AuthActionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};