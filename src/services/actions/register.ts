import { config, request } from "../../utils/api";
import { AppThunk } from "../store";
import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, REGISTER_CLEAN_STATE } from "../constants";
import { TUserRegLogin } from "../types/data";

export interface IUserRegister {
    readonly type: typeof USER_REGISTER
}

export interface IUserRegisterSuccess {
    readonly type: typeof USER_REGISTER_SUCCESS,
    readonly res: TUserRegLogin
}

export interface IUserRegisterFailed {
    readonly type: typeof USER_REGISTER_FAILED
}

export interface IRegisterCleanState {
    readonly type: typeof REGISTER_CLEAN_STATE
}

export type TRegisterActions =
    | IUserRegister
    | IUserRegisterSuccess
    | IUserRegisterFailed
    | IRegisterCleanState

export const userRegister = (userName: string, email: string, pass: string): AppThunk => (dispatch) => {
    dispatch({
        type: USER_REGISTER
    })
    request<TUserRegLogin>(`${config.baseUrl}/auth/register`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            "email": `${email}`,
            "password": `${pass}`,
            "name": `${userName}`
        })
    })
        .then(res => {
            if (res) {
                dispatch({
                    type: USER_REGISTER_SUCCESS,
                    res: res
                })
            }
        })
        .then(() => {
            dispatch({
                type: REGISTER_CLEAN_STATE
            })
        })
        .catch(err => {
            alert(err.message)
            dispatch({
                type: USER_REGISTER_FAILED
            })
        })
}