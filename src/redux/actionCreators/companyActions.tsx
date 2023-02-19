import { Dispatch } from 'redux';
import { ICompany as Company } from '../../models/company';
import { AxiosResponse } from 'axios';
import axios from '../../services/axios';
import history from '../../history';
import { ThunkResult } from './actionResultTypes';
import { 
    Action,
    ActionType,
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
} from '../actionTypes/companyActionTypes';


export const getCompanies = (): ThunkResult<void> => async (dispatch: Dispatch<Action>) => { 
    dispatch<IFetchCompanies>({  
        type: ActionType.FETCH_COMPANIES 
    });
    try {
        const response: AxiosResponse<Company[]> = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
        dispatch<IFetchCompaniesSuccess>({
            type: ActionType.FETCH_COMPANIES_SUCCESS,
            payload: response.data  
        });
    } catch(err: any) {
        dispatch<IFetchCompaniesFail>({
            type: ActionType.FETCH_COMPANIES_FAIL,
            payload: err
        });
    }
}
export const getCompany = (id: number): ThunkResult<void> => async (dispatch: Dispatch<Action>) => { 
    dispatch<IFetchCompany>({
        type: ActionType.FETCH_COMPANY
    });

    try {
        const response: AxiosResponse<Company> = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        dispatch<IFetchCompanySuccess>({
            type: ActionType.FETCH_COMPANY_SUCCESS,
            payload: response.data  
        });

    } catch(err:any) {
        dispatch<IFetchCompanyFail>({
            type: ActionType.FETCH_COMPANY_FAIL,
            payload: err
        });
    }
}
export const addCompany = (company: Company): ThunkResult<void> => async (dispatch: Dispatch<Action>) => { 
    dispatch<IAddCompany>({ 
        type: ActionType.ADD_COMPANY
    });
    try {
        const response: AxiosResponse<Company> = await axios.post(`/companies`, company);
        dispatch<IAddCompanySuccess>({
            type: ActionType.ADD_COMPANY_SUCCESS,
            payload: response.data  
        });

    } catch(err:any) {
        dispatch<IAddCompanyFail>({
            type: ActionType.ADD_COMPANY_FAIL,
            payload: err
        });
    }
};
export const editCompany = (editedCompany: Company): ThunkResult<void> => async (dispatch: Dispatch<Action>) => { 
    dispatch<IEditCompany>({ type: ActionType.EDIT_COMPANY });
    try {
        const response: AxiosResponse<Company> = await axios.patch(`/companies/${editedCompany.id}`, editedCompany);
        dispatch<IEditCompanySuccess>({ 
            type: ActionType.EDIT_COMPANY_SUCCESS, 
            payload: response.data
        });
    } catch (err: any) {
        dispatch<IEditCompanyFail>({ 
            type: ActionType.EDIT_COMPANY_FAIL,
            payload: err
        });
    }
};
export const deleteCompany = (deletedId: number): ThunkResult<void> => async (dispatch: Dispatch<Action>) => { 
    dispatch<IDeleteCompany>({ type: ActionType.DELETE_COMPANY });
    try {
        const response: AxiosResponse<number> = await axios.delete(`/companies/${deletedId}`);
        dispatch<IDeleteCompanySuccess>({
            type: ActionType.DELETE_COMPANY_SUCCESS,
            payload: response.data
        });
        history.push('/');
    } catch (err: any) {
        dispatch<IDeleteCompanyFail>({ 
            type: ActionType.DELETE_COMPANY_FAIL,
            payload: err
        });
    }
};


