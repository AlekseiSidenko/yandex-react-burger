import { TUserInfo } from "../../utils/types"
import { USER_LOGIN_SUCCESS } from "../actions/login"
import { CLEAN_USER_INFO, GET_USER_INFO, GET_USER_INFO_FAILED, GET_USER_INFO_SUCCESS } from "../actions/profile"
import { REFRESH_USER_INFO_SUCCESS } from "../actions/refresh-user"
import { USER_REGISTER_SUCCESS } from "../actions/register"

type TState = {
    userInfoRequest: boolean,
    authChecked: boolean,
    userInfoFailed: boolean,
    userInfo: TUserInfo
}

const initialState = {
    userInfoRequest: false,
    authChecked: false,
    userInfoFailed: false,
    userInfo: {} as TUserInfo
}

export const userInfoReduser = (state: TState = initialState, action: any): TState => {
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
                userInfo: {} as TUserInfo
            }
        }
        default: {
            return state
        }
    }
}