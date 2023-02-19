import { combineReducers } from 'redux';

import { AlertReducer, IAlertState as AlertState } from './AlertReducer';
import { AuthReducer, IAuthState as AuthState } from './authReducer';
import { CompanyReducer, ICompaniesState as CompaniesState } from './companyReducer';
    
interface RootStateType {
    readonly alert: AlertState;
    readonly auth: AuthState;
    readonly companies: CompaniesState;
}

const rootReducer = combineReducers<RootStateType>({
    alert: AlertReducer,
    auth: AuthReducer,
    companies: CompanyReducer
});

export default rootReducer;