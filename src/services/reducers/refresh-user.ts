import { TRefreshUserActions } from "../actions/refresh-user";
import { REFRESH_USER_INFO, REFRESH_USER_INFO_SUCCESS, REFRESH_USER_INFO_FAILED } from "../constants";
import { TUserInfo } from "../types/data";

type TState = {
    userRefreshRequest: boolean,
    userRefreshFailed: boolean,
    userRefresh?: TUserInfo
}

export const refreshUserInitialState = {
    userRefreshRequest: false,
    userRefreshFailed: false,
    userRefresh: undefined
}

export const refreshUserInfoReduser = (state: TState = refreshUserInitialState, action: TRefreshUserActions ): TState => {
    switch (action.type) {
        case REFRESH_USER_INFO: {
            return {
                ...state,
                userRefreshRequest: true,
                userRefreshFailed: false
            }
        }
        case REFRESH_USER_INFO_SUCCESS: {
            return {
                ...state,
                userRefreshRequest: false,
                userRefresh: action.res
            }
        }
        case REFRESH_USER_INFO_FAILED: {
            return {
                ...state,
                userRefreshRequest: false,
                userRefreshFailed: true
            }
        }
        default: {
            return state
        }
    }
}