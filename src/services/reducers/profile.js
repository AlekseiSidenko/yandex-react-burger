import { setCookie } from "../../utils/cookie"
import { USER_LOGIN_SUCCESS } from "../actions/login"
import { CLEAN_USER_INFO, GET_NEW_TOKEN_SUCCESS, GET_USER_INFO, GET_USER_INFO_FAILED, GET_USER_INFO_SUCCESS } from "../actions/profile"
import { REFRESH_USER_INFO_SUCCESS } from "../actions/refresh-user"

const initialState = {
    userInfoRequest: false,
    authChecked: false,
    userInfoFailed: false,
    userInfo: null
}

export const userInfoReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO: {
            return {
                ...state,
                userInfoRequest: true,
                userInfoFailed: false
            }
        }
        case GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfoRequest: false,
                authChecked: true,
                userInfo: action.res,
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                authChecked: true,
                userInfo: action.res
            }
        }
        case REFRESH_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.res
            }
        }
        case GET_NEW_TOKEN_SUCCESS: {
            setCookie('token', action.res.accessToken);
            setCookie('refToken', action.res.refreshToken)
        }
        case GET_USER_INFO_FAILED: {
            return {
                ...state,
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: true,
            }
        }
        case CLEAN_USER_INFO: {
            return {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: null
            }
        }
        default: {
            return state
        }
    }
}