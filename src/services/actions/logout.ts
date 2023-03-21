import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { cleanUserInfo, CLEAN_USER_INFO } from "./profile";

export const LOG_OUT: "LOG_OUT" = "LOG_OUT";
export const LOG_OUT_SUCCESS: "LOG_OUT_SUCCESS" = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILED: "LOG_OUT_FAILED" = "LOG_OUT_FAILED";
// export const CLEAN_LOG_OUT_INFO: "CLEAN_LOG_OUT_INFO" = "CLEAN_LOG_OUT_INFO";

// export interface ICleanUserInfo {
//     readonly type: typeof CLEAN_LOG_OUT_INFO
// }

export const logOut: AppThunk = (token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOG_OUT
        })
        request(`${config.baseUrl}/auth/logout`, {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify({
                "token": `${token}`,
            })
        })
            .then(res => {
                if (res) {
                    dispatch({
                        type: LOG_OUT_SUCCESS,
                    })
                }
            })
            .then(() => {
                dispatch(cleanUserInfo())
            })
            .catch(err => {
                alert(err.message)
                dispatch({
                    type: LOG_OUT_FAILED,
                })
                dispatch(cleanUserInfo())
            })
    }
}

// export const CleanUserInfo = () => {
//     return {
//         type: CLEAN_USER_INFO
//     }
// }