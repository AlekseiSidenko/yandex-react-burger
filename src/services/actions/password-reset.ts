import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";

export const PASSWORD_RESET: "PASSWORD_RESET" = "PASSWORD_RESET";
export const PASSWORD_RESET_SUCCESS: "PASSWORD_RESET_SUCCESS" = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED: "PASSWORD_RESET_FAILED" = "PASSWORD_RESET_FAILED";
export const PASSWORD_RESET_CLEAN_STATE: "PASSWORD_RESET_CLEAN_STATE" = "PASSWORD_RESET_CLEAN_STATE";

export const passwordReset: AppThunk = (pass: string, token:string) => {
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