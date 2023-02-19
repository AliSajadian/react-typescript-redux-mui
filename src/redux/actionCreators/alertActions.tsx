import { ActionType } from '../actionTypes/alertActionTypes';


export const AlertOpenModel = (message: string) => {
    return {
        type: ActionType.OPEN_ALERT_MODAL,
        message: message
    }

}
export const AlertModalToggler = () => {
    return {
        type: ActionType.TOGGLE_ALERT_MODAL
    }
}




