import { ICompany as Company } from '../../models/company';


export enum ActionType {
    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_FAIL = 'FETCH_COMPANIES_FAIL',
    FETCH_COMPANY = 'FETCH_COMPANY',
    FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS',
    FETCH_COMPANY_FAIL = 'FETCH_COMPANY_FAIL',
    ADD_COMPANY = 'ADD_COMPANY',
    ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS',
    ADD_COMPANY_FAIL = 'ADD_COMPANY_FAIL',
    EDIT_COMPANY = 'EDIT_COMPANY',
    EDIT_COMPANY_SUCCESS = 'EDIT_COMPANY_SUCCESS',
    EDIT_COMPANY_FAIL = 'EDIT_COMPANY_FAIL',
    DELETE_COMPANY = 'DELETE_COMPANY',
    DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS',
    DELETE_COMPANY_FAIL = 'DELETE_COMPANY_FAIL'
}

export interface IFetchCompanies {
    type: ActionType.FETCH_COMPANIES;
}
export interface IFetchCompaniesSuccess {
    type: ActionType.FETCH_COMPANIES_SUCCESS;
    payload: Company[];
}
export interface IFetchCompaniesFail {
    type: ActionType.FETCH_COMPANIES_FAIL;
    payload: String | null;
}

export interface IFetchCompany {
    type: ActionType.FETCH_COMPANY;
}
export interface IFetchCompanySuccess {
    type: ActionType.FETCH_COMPANY_SUCCESS;
    payload: Company;
}
export interface IFetchCompanyFail {
    type: ActionType.FETCH_COMPANY_FAIL;
    payload: String | null;
}

export interface IAddCompany {
    type: ActionType.ADD_COMPANY;
}
export interface IAddCompanySuccess {
    type: ActionType.ADD_COMPANY_SUCCESS;
    payload: Company;
}
export interface IAddCompanyFail {
    type: ActionType.ADD_COMPANY_FAIL;
    payload: String | null;
}

export interface IEditCompany {
    type: ActionType.EDIT_COMPANY;
}
export interface IEditCompanySuccess {
    type: ActionType.EDIT_COMPANY_SUCCESS;
    payload: Company;
}
export interface IEditCompanyFail {
    type: ActionType.EDIT_COMPANY_FAIL;
    payload: String | null;
}

export interface IDeleteCompany {
    type: ActionType.DELETE_COMPANY;
}
export interface IDeleteCompanySuccess {
    type: ActionType.DELETE_COMPANY_SUCCESS;
    payload: number;
}
export interface IDeleteCompanyFail {
    type: ActionType.DELETE_COMPANY_FAIL;
    payload: String | null;
}

export type Action =
    | IFetchCompanies
    | IFetchCompaniesSuccess
    | IFetchCompaniesFail
    | IFetchCompany
    | IFetchCompanySuccess
    | IFetchCompanyFail
    | IAddCompany
    | IAddCompanySuccess
    | IAddCompanyFail
    | IEditCompany
    | IEditCompanySuccess
    | IEditCompanyFail
    | IDeleteCompany
    | IDeleteCompanySuccess
    | IDeleteCompanyFail;