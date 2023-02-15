import { combineReducers } from 'redux';
import { AuthReducer, IAuthState as AuthState } from './reducers/authReducer';
import { CompanyReducer, ICompaniesState as CompaniesState } from './reducers/companyReducer';

import { CompanyActions } from './actions/companyActions';
import { AuthActions } from './actions/authActions';


export type RootActions = 
    | AuthActions
    | CompanyActions; 

export interface RootState {
    readonly auth: AuthState;
    readonly companies: CompaniesState;
}

const rootReducer = combineReducers<RootState>({
    auth: AuthReducer,
    companies: CompanyReducer
});

export default rootReducer;