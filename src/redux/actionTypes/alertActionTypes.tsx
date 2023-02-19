export enum ActionType {
    OPEN_ALERT_MODAL = 'OPEN_ALERT_MODAL',
    TOGGLE_ALERT_MODAL = 'TOGGLE_ALERT_MODAL',
}

export interface IAlertOpen {
    type: ActionType.OPEN_ALERT_MODAL;
    payload: string;
}
export interface IAlertToggle {
    type: ActionType.TOGGLE_ALERT_MODAL;
}

export type Action =
    | IAlertOpen
    | IAlertToggle;