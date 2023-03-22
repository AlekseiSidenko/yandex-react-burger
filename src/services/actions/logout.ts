import { config, request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { cleanUserInfo } from "./profile";
import { LOG_OUT, LOG_OUT_SUCCESS, LOG_OUT_FAILED } from "../constants/logout";

export interface ILogOut {
    readonly type: typeof LOG_OUT
}

export interface ILogOutSuccess {
    readonly type: typeof LOG_OUT_SUCCESS
}

export interface ILogOutFailed {
    readonly type: typeof LOG_OUT_FAILED
}

export type TlogOutActions =
    | ILogOut
    | ILogOutSuccess
    | ILogOutFailed

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