import { Reducer } from 'redux';
import { Action, ActionType } from '../actionTypes/alertActionTypes';


export interface IAlertState {
    isModalOpen: boolean,
    message: string,
}

const initialState = {
    isModalOpen: false,
    message: '',
  };

export const AlertReducer: Reducer<IAlertState, Action> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionType.OPEN_ALERT_MODAL:
            return {
              ...state,
              message: action.payload,
              isModalOpen: true
            };
          case ActionType.TOGGLE_ALERT_MODAL:
            return {
              ...state,
              isModalOpen: !state.isModalOpen
            };
          default:
            return state;
    }
};


