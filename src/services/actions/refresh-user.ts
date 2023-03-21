import { config, fetchWithRefresh } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";

export const REFRESH_USER_INFO: "REFRESH_USER_INFO" = "REFRESH_USER_INFO";
export const REFRESH_USER_INFO_SUCCESS: "REFRESH_USER_INFO_SUCCESS" = "REFRESH_USER_INFO_SUCCESS";
export const REFRESH_USER_INFO_FAILED: "REFRESH_USER_INFO_FAILED" = "REFRESH_USER_INFO_FAILED";

export const refreshUserInfo: AppThunk = (userName: string, email: string, pass: string, token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: REFRESH_USER_INFO
        })
        fetchWithRefresh(`${config.baseUrl}/auth/user`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + `${token}`
            },
            body: JSON.stringify({
                "email": `${email}`,
                "password": `${pass}`,
                "name": `${userName}`
            })
        })
            .then(res => {
                if (res) {
                    dispatch({
                        type: REFRESH_USER_INFO_SUCCESS,
                        res: res
                    })
                }
            })
            .catch(err => {
                alert(err.message)
                dispatch({
                    type: REFRESH_USER_INFO_FAILED
                })
            })
    }
}