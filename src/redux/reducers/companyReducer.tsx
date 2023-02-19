import { Reducer } from 'redux';
import _ from 'lodash';

import { Action, ActionType } from '../actionTypes/companyActionTypes';
import { ICompany as Company } from '../../models/company';

export interface ICompaniesState {
    companies: Company[];
    loading: boolean;
    error: String | null,
}
const initialState = {
    companies: [],
    loading: false,
    error: null,   
};
export const CompanyReducer: Reducer<ICompaniesState, Action> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionType.FETCH_COMPANY:
        case ActionType.FETCH_COMPANIES:
        case ActionType.ADD_COMPANY:
        case ActionType.EDIT_COMPANY:
        case ActionType.DELETE_COMPANY:
            return { ...state, loading: true };

        case ActionType.FETCH_COMPANY_FAIL:
        case ActionType.FETCH_COMPANIES_FAIL:
        case ActionType.ADD_COMPANY_FAIL:
        case ActionType.EDIT_COMPANY_FAIL:
        case ActionType.DELETE_COMPANY_FAIL:
            return { 
                ...state, 
                loading: false,
                error: action.payload
            };

        case ActionType.FETCH_COMPANY_SUCCESS:
        case ActionType.ADD_COMPANY_SUCCESS:
            const { id } = action.payload;
            return {
                ...state,
                companies: { ...state.companies, [id]: action.payload },
                loading: false
            };

        case ActionType.EDIT_COMPANY_SUCCESS:
            const company: Company = action.payload
            const index = state.companies.findIndex(itm => itm.id === company.id)
            const companiesPart1 = state.companies.slice(0, index)
            const companiesPart2 = state.companies.slice(index + 1)
            return {
                ...state,
                companies: { ...companiesPart1, company, ...companiesPart2 },
                loading: false
            };
        case ActionType.FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: { ...state.companies, ..._.mapKeys(action.payload, 'id') },
                loading: false
            };

        case ActionType.DELETE_COMPANY_SUCCESS:
            return {
                ...state,
                companies: { ..._.omit(state.companies, action.payload) }
            };

        default:
            return state;
    }
};
