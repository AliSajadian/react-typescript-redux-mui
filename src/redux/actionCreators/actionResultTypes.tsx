import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store/store';
import { Action as AlertActions } from '../actionTypes/alertActionTypes';
import { Action as AuthActions } from '../actionTypes/authActionTypes';
import { Action as CompanyActions } from '../actionTypes/companyActionTypes';

export type RootActions = 
    | AlertActions
    | AuthActions
    | CompanyActions;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
