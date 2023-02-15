import { Dispatch } from 'redux';
import { ICompany as Company } from '../../models/company';
import { AxiosResponse } from 'axios';
import axios from '../../services/axios';
import history from '../../history';
import { CompanyActionTypes } from '../constants';
import { ThunkResult } from './actionTypes';
import { 
    IFetchCompanies, 
    IFetchCompaniesSuccess, 
    IFetchCompaniesFail, 
    IFetchCompany, 
    IFetchCompanySuccess, 
    IFetchCompanyFail,
    IAddCompany,
    IAddCompanySuccess,
    IAddCompanyFail,
    IEditCompany,
    IEditCompanySuccess,
    IEditCompanyFail,
    IDeleteCompany,
    IDeleteCompanySuccess,
    IDeleteCompanyFail,
} from './companyActionsContracts';


// FETCH COMPANIES

export const fetchCompanies = (): ThunkResult<void> => async dispatch => {
    handleIFetchCompanies(dispatch);
    try {
        const response: AxiosResponse<Company[]> = await axios.get('/companies');
        handleIFetchCompaniesSuccess(dispatch, response.data);
    } catch (e) {
        handleIFetchCompaniesFail(dispatch);
    }
};
export const handleIFetchCompanies = (dispatch: Dispatch<IFetchCompanies>) => {
    dispatch({ type: CompanyActionTypes.FETCH_COMPANIES });
};
export const handleIFetchCompaniesSuccess = (
    dispatch: Dispatch<IFetchCompaniesSuccess>,
    response: Company[]
) => {
    dispatch({
        type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS,
        payload: response
    });
};
export const handleIFetchCompaniesFail = (dispatch: Dispatch<IFetchCompaniesFail>) => {
    dispatch({
        type: CompanyActionTypes.FETCH_COMPANIES_FAIL
    });
};

// FETCH COMPANY

export const fetchCompany = (id: number): ThunkResult<void> => async dispatch => {
    handleFetchCompany(dispatch);
    try {
        const response: AxiosResponse<Company> = await axios.get(`/companies/${id}`);
        handleFetchCompanySuccess(dispatch, response.data);
    } catch (e) {
        handleFetchCompanyFail(dispatch);
    }
};
export const handleFetchCompany = (dispatch: Dispatch<IFetchCompany>) => {
    dispatch({ type: CompanyActionTypes.FETCH_COMPANY });
};
const handleFetchCompanySuccess = (
    dispatch: Dispatch<IFetchCompanySuccess>,
    response: Company
) => {
    dispatch({
        type: CompanyActionTypes.FETCH_COMPANY_SUCCESS,
        payload: response
    });
};
const handleFetchCompanyFail = (dispatch: Dispatch<IFetchCompanyFail>) => {
    dispatch({
        type: CompanyActionTypes.FETCH_COMPANY_FAIL
    });
};

// ADD COMPANY

export const addCompany = (company: Company): ThunkResult<void> => async dispatch => {
    handleAddCompany(dispatch);
    try {
        const response: AxiosResponse<Company> = await axios.post(`/companies`, company);
        handleAddCompanySuccess(dispatch, response.data);
    } catch (e) {
        handleAddCompanyFail(dispatch);
    }
};
const handleAddCompany = (dispatch: Dispatch<IAddCompany>) => {
    dispatch({ type: CompanyActionTypes.ADD_COMPANY });
};
const handleAddCompanySuccess = (
    dispatch: Dispatch<IAddCompanySuccess>,
    response: Company
) => {
    dispatch({ type: CompanyActionTypes.ADD_COMPANY_SUCCESS, payload: response });
    history.push('/');
};
const handleAddCompanyFail = (dispatch: Dispatch<IAddCompanyFail>) => {
    dispatch({ type: CompanyActionTypes.ADD_COMPANY_FAIL });
};

// EDIT COMPANY

export const editCompany = (editedCompany: Company): ThunkResult<void> => async dispatch => {
    handleEditCompany(dispatch);
    try {
        const response: AxiosResponse<Company> = await axios.patch(
            `/companies/${editedCompany.id}`,
            editedCompany
        );
        handleEditCompanySuccess(dispatch, response.data);
    } catch (e) {
        handleEditCompanyFail(dispatch);
    }
};
const handleEditCompany = (dispatch: Dispatch<IEditCompany>): void => {
    dispatch({ type: CompanyActionTypes.EDIT_COMPANY });
};
const handleEditCompanySuccess = (
    dispatch: Dispatch<IEditCompanySuccess>,
    editedCompany: Company
) => {
    dispatch({ type: CompanyActionTypes.EDIT_COMPANY_SUCCESS, payload: editedCompany });
    history.push('/');
};
const handleEditCompanyFail = (dispatch: Dispatch<IEditCompanyFail>) => {
    dispatch({ type: CompanyActionTypes.EDIT_COMPANY_FAIL });
};

// DELETE COMPANY

export const deleteCompany = (deletedId: number): ThunkResult<void> => async dispatch => {
    dispatch({ type: CompanyActionTypes.DELETE_COMPANY });
    try {
        await axios.delete(`/companies/${deletedId}`);
        dispatch({
            type: CompanyActionTypes.DELETE_COMPANY_SUCCESS,
            payload: deletedId
        });
        history.push('/');
    } catch (e) {
        dispatch({ type: CompanyActionTypes.DELETE_COMPANY_FAIL });
    }
};

export type CompanyActions =
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
