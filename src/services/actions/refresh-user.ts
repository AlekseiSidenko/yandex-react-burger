import { config, fetchWithRefresh } from "../../utils/api";
import { AppThunk } from "../store";
import { REFRESH_USER_INFO, REFRESH_USER_INFO_SUCCESS, REFRESH_USER_INFO_FAILED } from "../constants";
import { TUserInfo } from "../types/data";

export interface IRefreshUserInfo {
    readonly type: typeof REFRESH_USER_INFO
}

export interface IRefreshUserInfoSuccess {
    readonly type: typeof REFRESH_USER_INFO_SUCCESS
    readonly res: TUserInfo
}

export interface IRefreshUserInfoFailed {
    readonly type: typeof REFRESH_USER_INFO_FAILED
}

export type TRefreshUserActions =
    | IRefreshUserInfo
    | IRefreshUserInfoSuccess
    | IRefreshUserInfoFailed

export const refreshUserInfo = (userName: string, email: string, pass: string, token: string): AppThunk => (dispatch) => {
    dispatch({
        type: REFRESH_USER_INFO
    })
    fetchWithRefresh<TUserInfo>(`${config.baseUrl}/auth/user`, {
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