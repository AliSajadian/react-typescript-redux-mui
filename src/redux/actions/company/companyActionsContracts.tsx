import { CompanyActionTypes } from '../../constants';
import { ICompany as Company } from '../../../models/company';


export interface IFetchCompanies {
    type: CompanyActionTypes.FETCH_COMPANIES;
}
export interface IFetchCompaniesSuccess {
    type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS;
    payload: Company[];
}
export interface IFetchCompaniesFail {
    type: CompanyActionTypes.FETCH_COMPANIES_FAIL;
}

export interface IFetchCompany {
    type: CompanyActionTypes.FETCH_COMPANY;
}
export interface IFetchCompanySuccess {
    type: CompanyActionTypes.FETCH_COMPANY_SUCCESS;
    payload: Company;
}
export interface IFetchCompanyFail {
    type: CompanyActionTypes.FETCH_COMPANY_FAIL;
}

export interface IAddCompany {
    type: CompanyActionTypes.ADD_COMPANY;
}
export interface IAddCompanySuccess {
    type: CompanyActionTypes.ADD_COMPANY_SUCCESS;
    payload: Company;
}
export interface IAddCompanyFail {
    type: CompanyActionTypes.ADD_COMPANY_FAIL;
}

export interface IEditCompany {
    type: CompanyActionTypes.EDIT_COMPANY;
}
export interface IEditCompanySuccess {
    type: CompanyActionTypes.EDIT_COMPANY_SUCCESS;
    payload: Company;
}
export interface IEditCompanyFail {
    type: CompanyActionTypes.EDIT_COMPANY_FAIL;
}

export interface IDeleteCompany {
    type: CompanyActionTypes.DELETE_COMPANY;
}
export interface IDeleteCompanySuccess {
    type: CompanyActionTypes.DELETE_COMPANY_SUCCESS;
    payload: number;
}
export interface IDeleteCompanyFail {
    type: CompanyActionTypes.DELETE_COMPANY_FAIL;
}