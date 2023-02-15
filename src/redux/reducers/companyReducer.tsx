import _ from 'lodash';
import { CompanyActions } from '../actions/company/companyActions';
import { CompanyActionTypes } from '../constants';
import { Reducer } from 'redux';
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

export const CompanyReducer: Reducer<ICompaniesState, CompanyActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CompanyActionTypes.FETCH_COMPANY:
        case CompanyActionTypes.FETCH_COMPANIES:
        case CompanyActionTypes.ADD_COMPANY:
        case CompanyActionTypes.EDIT_COMPANY:
            return { ...state, loading: true };

        case CompanyActionTypes.FETCH_COMPANY_FAIL:
        case CompanyActionTypes.FETCH_COMPANIES_FAIL:
        case CompanyActionTypes.ADD_COMPANY_FAIL:
            return { ...state, loading: false };

        case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
        case CompanyActionTypes.ADD_COMPANY_SUCCESS:
            const { id } = action.payload;
            return {
                ...state,
                companies: { ...state.companies, [id]: action.payload },
                loading: false
            };

        case CompanyActionTypes.EDIT_COMPANY_SUCCESS:
            const company: Company = action.payload
            const index = state.companies.findIndex(itm => itm.id === company.id)
            const companiesPart1 = state.companies.slice(0, index)
            const companiesPart2 = state.companies.slice(index + 1)
            return {
                ...state,
                companies: { ...companiesPart1, company, ...companiesPart2 },
                loading: false
            };
        case CompanyActionTypes.FETCH_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: { ...state.companies, ..._.mapKeys(action.payload, 'id') },
                loading: false
            };

        case CompanyActionTypes.DELETE_COMPANY_SUCCESS:
            return {
                ...state,
                companies: { ..._.omit(state.companies, action.payload) }
            };

        default:
            return state;
    }
};

// export default companiesReducer;