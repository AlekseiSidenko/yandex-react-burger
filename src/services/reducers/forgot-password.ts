import { TForgotPasswordActions } from "../actions/forgot-password";
import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAILED, GET_TOKEN_CLEAN_STATE } from "../constants";
import { TResetForgotPass } from "../types/data"

type TState = {
    sentPassRequest: boolean,
    sentPassFailed: boolean,
    isMailSent: boolean,
    res?: TResetForgotPass
}

export const forgotPassInitialState = {
    sentPassRequest: false,
    sentPassFailed: false,
    isMailSent: false,
    res: undefined
}

export const getTokenReduser = (state: TState = forgotPassInitialState, action: TForgotPasswordActions): TState => {
    switch (action.type) {
        case GET_TOKEN: {
            return {
                ...state,
                sentPassRequest: true,
                sentPassFailed: false
            }
        }
        case GET_TOKEN_SUCCESS: {
            return {
                ...state,
                sentPassRequest: false,
                res: action.res,
                isMailSent: true
            }
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                sentPassRequest: false,
                sentPassFailed: true,
                isMailSent: false
            }
        }
        default: {
            return state
        }
    }
}