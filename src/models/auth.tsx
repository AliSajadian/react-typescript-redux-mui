import { IUser } from "./user";

export interface IAuth {
    authToken : string ,
    isPasswordChanged: boolean,
    user? : IUser;
    error? : string | null;
}