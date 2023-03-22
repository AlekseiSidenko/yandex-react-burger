import { TUserInfo } from "../types/data"
import { USER_LOGIN_SUCCESS } from "../constants/login"
import { GET_USER_INFO, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILED, CLEAN_USER_INFO } from "../constants/profile";
import { TProfileActions } from "../actions/profile";
import { REFRESH_USER_INFO_SUCCESS } from "../constants/refresh-user";
import { USER_REGISTER_SUCCESS } from "../constants/register";

type TState = {
    userInfoRequest: boolean,
    authChecked: boolean,
    userInfoFailed: boolean,
    userInfo?: TUserInfo
}

const initialState = {
    userInfoRequest: false,
    authChecked: false,
    userInfoFailed: false,
    userInfo: undefined
}

export const userInfoReduser = (state: TState = initialState, action: TProfileActions): TState => {
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
        case USER_REGISTER_SUCCESS: {
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
                userInfo: undefined
            }
        }
        default: {
            return state
        }
    }
}