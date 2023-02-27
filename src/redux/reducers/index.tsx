import { combineReducers } from 'redux';
import { reducer as toastr } from "react-redux-toastr";

import { AlertReducer, IAlertState as AlertState } from './AlertReducer';
import { AuthReducer, IAuthState as AuthState } from './authReducer';
import { CompanyReducer, ICompaniesState as CompaniesState } from './companyReducer';
    
interface RootStateType {
    readonly toastr: any;
    readonly alert: AlertState;
    readonly auth: AuthState;
    readonly companies: CompaniesState;
}

const rootReducer = combineReducers<RootStateType>({
    toastr: toastr,
    alert: AlertReducer,
    auth: AuthReducer,
    companies: CompanyReducer,
});

export default rootReducer;