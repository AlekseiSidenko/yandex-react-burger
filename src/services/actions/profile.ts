import { config, fetchWithRefresh } from "../../utils/api";
import { AppDispatch, AppThunk } from "../store";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export const CLEAN_USER_INFO = "CLEAN_USER_INFO";

export interface ICleanUserInfo {
    readonly type: typeof CLEAN_USER_INFO
}

export const getUserInfo: AppThunk = (token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_USER_INFO
        })
        fetchWithRefresh(`${config.baseUrl}/auth/user`, {
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
}

export const cleanUserInfo = () => {
    return {
        type: CLEAN_USER_INFO
    }
}
