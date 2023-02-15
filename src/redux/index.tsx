import { combineReducers } from 'redux';
import { AlertReducer, IAlertState as AlertState } from './reducers/AlertReducer';
import { AuthReducer, IAuthState as AuthState } from './reducers/authReducer';
import { CompanyReducer, ICompaniesState as CompaniesState } from './reducers/companyReducer';

import { AlertActions } from './actions/alert/alertActions';
import { AuthActions } from './actions/auth/authActions';
import { CompanyActions } from './actions/company/companyActions';


export type RootActions = 
    | AlertActions
    | AuthActions
    | CompanyActions; 

export interface RootState {
    readonly alert: AlertState;
    readonly auth: AuthState;
    readonly companies: CompaniesState;
}

const rootReducer = combineReducers<RootState>({
    alert: AlertReducer,
    auth: AuthReducer,
    companies: CompanyReducer
});

export default rootReducer;