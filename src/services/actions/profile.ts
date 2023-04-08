import { config, fetchWithRefresh } from "../../utils/api";
import { AppThunk } from "../store";
import { GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILED, CLEAN_USER_INFO } from "../constants";
import { TUserInfo } from "../types/data";
import { IUserLoginSuccess } from "./login";
import { IRefreshUserInfoSuccess } from "./refresh-user";
import { IUserRegisterSuccess } from "./register";

export interface IGetUserInfo {
    readonly type: typeof GET_USER_INFO
}

export interface IGetUserInfoSuccess {
    readonly type: typeof GET_USER_INFO_SUCCESS
    readonly res: TUserInfo
}

export interface IGetUserInfoFailed {
    readonly type: typeof GET_USER_INFO_FAILED
}

export interface ICleanUserInfo {
    readonly type: typeof CLEAN_USER_INFO
}

export type TProfileActions =
    | IGetUserInfo
    | IGetUserInfoSuccess
    | IGetUserInfoFailed
    | ICleanUserInfo
    | IUserLoginSuccess
    | IRefreshUserInfoSuccess
    | IUserRegisterSuccess

export const getUserInfo = (token: string): AppThunk => (dispatch) => {
    dispatch({
        type: GET_USER_INFO
    })
    fetchWithRefresh<TUserInfo>(`${config.baseUrl}/auth/user`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + `${token}`
        },
    })
        .then(res => {
            if (res) {
                dispatch({
                    type: GET_USER_INFO_SUCCESS,
                    res: res
                })
            }
        })
        .catch((err) => {
            console.log(err.message)
            dispatch({
                type: GET_USER_INFO_FAILED
            })
        }
        )
}

export const cleanUserInfo = () => {
    return {
        type: CLEAN_USER_INFO
    }
}
