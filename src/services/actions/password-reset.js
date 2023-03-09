import { config } from "../../utils/api";
import checkResponse from "../../utils/api";

export const PASSWORD_RESET = "PASSWORD_RESET";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";
export const PASSWORD_RESET_CLEAN_STATE = "PASSWORD_RESET_CLEAN_STATE";

export const passwordReset = (pass, token) => {
    return function (dispatch) {
        dispatch({
            type: PASSWORD_RESET
        })
        fetch(`${config.baseUrl}/password-reset/reset`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "password": `${pass}`,
                "token": `${token}`
            })
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res) {
                    dispatch({
                        type: PASSWORD_RESET_SUCCESS,
                        res: res
                    })
                } else {
                    dispatch({
                        type: PASSWORD_RESET_FAILED
                    })
                }
            })
            .then(() => {
                dispatch({
                    type: PASSWORD_RESET_CLEAN_STATE
                })
            })
            .catch(err => {
                alert(err)
                dispatch({
                    type: PASSWORD_RESET_FAILED
                })
            })
    }
}