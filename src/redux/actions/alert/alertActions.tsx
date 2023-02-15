import { AlertActionTypes as types } from "../../constants";
import { IAlertOpen, IAlertToggle } from './alertActionsContracts';


export const AlertOpenModel = (message: string) => {
    return {
        type: types.OPEN_ALERT_MODAL,
        message: message
    }

}
export const AlertModalToggler = () => {
    return {
        type: types.TOGGLE_ALERT_MODAL
    }
}

export type AlertActions =
    | IAlertOpen
    | IAlertToggle;


