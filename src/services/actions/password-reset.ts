import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { PASSWORD_RESET, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAILED, PASSWORD_RESET_CLEAN_STATE } from "../constants/password-reset";
import { TResetForgotPass } from "../types/data";

export interface IPasswordReset {
    readonly type: typeof PASSWORD_RESET
}

export interface IPasswordResetSuccess {
    readonly type: typeof PASSWORD_RESET_SUCCESS
    readonly res: TResetForgotPass
}

export interface IPasswordResetFailed {
    readonly type: typeof PASSWORD_RESET_FAILED
}

export interface IPasswordResetCleanState {
    readonly type: typeof PASSWORD_RESET_CLEAN_STATE
}

export type TPasswordResetActions =
    | IPasswordReset
    | IPasswordResetSuccess
    | IPasswordResetFailed
    | IPasswordResetCleanState

export const passwordReset: AppThunk = (pass: string, token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: PASSWORD_RESET
        })
        request(`${config.baseUrl}/password-reset/reset`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "password": `${pass}`,
                "token": `${token}`
            })
        })
            .then(res => {
                if (res) {
                    dispatch({
                        type: PASSWORD_RESET_SUCCESS,
                        res: res
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: PASSWORD_RESET_CLEAN_STATE
                })
            })
            .catch(err => {
                alert(err.message)
                dispatch({
                    type: PASSWORD_RESET_FAILED
                })
            })
    }
}