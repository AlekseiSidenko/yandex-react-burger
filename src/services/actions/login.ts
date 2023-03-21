import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";

export const USER_LOGIN: "USER_LOGIN" = "USER_LOGIN";
export const USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS" = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED: "USER_LOGIN_FAILED" = "USER_LOGIN_FAILED";

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