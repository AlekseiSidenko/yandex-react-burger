import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "../constants";
import { TUserRegLogin } from "../types/data";

export interface IUserLogin {
    readonly type: typeof USER_LOGIN
}

export interface IUserLoginSuccess {
    readonly type: typeof USER_LOGIN_SUCCESS
    readonly res: TUserRegLogin
}

export interface IUserLoginFailed {
    readonly type: typeof USER_LOGIN_FAILED
}

export type TUserLoginActions =
    | IUserLogin
    | IUserLoginSuccess
    | IUserLoginFailed

export const userLogin: AppThunk = (email: string, pass: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_LOGIN
        })
        request(`${config.baseUrl}/auth/login`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`
            })
        })
            .then(res => {
                if (res) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS,
                        res: res
                    })
                }
            })
            .catch(err => {
                alert(err.message)
                dispatch({
                    type: USER_LOGIN_FAILED
                })
            })
    }
}