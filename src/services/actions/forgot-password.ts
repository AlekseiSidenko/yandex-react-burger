import { config, request } from "../../utils/api";
import { AppThunk } from "../store";
import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAILED, GET_TOKEN_CLEAN_STATE } from "../constants";
import { TResetForgotPass } from "../types/data";

export interface IGetToken {
    readonly type: typeof GET_TOKEN
}

export interface IGetTokenSuccess {
    readonly type: typeof GET_TOKEN_SUCCESS,
    readonly res: TResetForgotPass
}

export interface IGetTokenFailed {
    readonly type: typeof GET_TOKEN_FAILED
}

export interface IGetTokenCleanState {
    readonly type: typeof GET_TOKEN_CLEAN_STATE
}

export type TForgotPasswordActions =
    | IGetToken
    | IGetTokenSuccess
    | IGetTokenFailed
    | IGetTokenCleanState

export const getToken = (email: string): AppThunk => (dispatch) => {
    dispatch({
        type: GET_TOKEN
    })
    request<TResetForgotPass>(`${config.baseUrl}/password-reset`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            "email": `${email}`,
        })
    })
        .then(res => {
            if (res) {
                dispatch({
                    type: GET_TOKEN_SUCCESS,
                    res: res
                })
            }
        })
        .catch(err => {
            alert(err.message)
            dispatch({
                type: GET_TOKEN_FAILED
            })
        })
}