import { AuthActionTypes } from '../constants';
import { IAuth as Auth } from '../../models/auth';


export interface IAuthStart {
    type: AuthActionTypes.AUTH_START;
}
export interface IAuthSuccess {
    type: AuthActionTypes.AUTH_SUCCESS;
    payload: Auth;
}
export interface IAuthFail {
    type: AuthActionTypes.AUTH_FAIL;
}
