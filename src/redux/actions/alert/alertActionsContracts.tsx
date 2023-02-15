import { AlertActionTypes } from '../../constants';


export interface IAlertOpen {
    type: AlertActionTypes.OPEN_ALERT_MODAL;
    payload: string;
}
export interface IAlertToggle {
    type: AlertActionTypes.TOGGLE_ALERT_MODAL;
}

