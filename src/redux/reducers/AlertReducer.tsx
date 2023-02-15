import { Reducer } from 'redux';
import { AlertActionTypes as types } from "../constants";
import { AlertActions } from '../actions/alert/alertActions';


export interface IAlertState {
    isModalOpen: boolean,
    message: string,
}

const initialState = {
    isModalOpen: false,
    message: '',
  };

export const AlertReducer: Reducer<IAlertState, AlertActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case types.OPEN_ALERT_MODAL:
            return {
              ...state,
              message: action.payload,
              isModalOpen: true
            };
          case types.TOGGLE_ALERT_MODAL:
            return {
              ...state,
              isModalOpen: !state.isModalOpen
            };
          default:
            return state;
    }
};


