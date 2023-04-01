import { setCookie } from "../../utils/cookie"
import { TUserLoginActions } from "../actions/login";
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "../constants";

type TState = {
    userLoginRequest: boolean,
    userLoginFailed: boolean,
}

export const userLoginInitialState = {
    userLoginRequest: false,
    userLoginFailed: false,
}

export const userLoginReduser = (state: TState = userLoginInitialState, action: TUserLoginActions): TState => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                userLoginRequest: true,
                userLoginFailed: false
            }
        }
        case USER_LOGIN_SUCCESS: {
            setCookie('token', action.res.accessToken);
            setCookie('refToken', action.res.refreshToken)
            return {
                ...state,
                userLoginRequest: false,
            }
        }
        case USER_LOGIN_FAILED: {
            return {
                ...state,
                userLoginRequest: false,
                userLoginFailed: true
            }
        }
        default: {
            return state
        }
    }
}