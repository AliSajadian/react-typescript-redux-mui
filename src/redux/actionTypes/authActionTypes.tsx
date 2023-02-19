import { IAuth as Auth } from '../../models/auth';

export enum ActionType {
    AUTH_START = 'AUTH_START',
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_FAIL = 'AUTH_FAIL',
}

export interface IAuthStart {
    type: ActionType.AUTH_START;
}
export interface IAuthSuccess {
    type: ActionType.AUTH_SUCCESS;
    payload: Auth;
}
export interface IAuthFail {
    type: ActionType.AUTH_FAIL;
    payload: string | null;
}

export type Action =
    | IAuthStart
    | IAuthSuccess
    | IAuthFail;