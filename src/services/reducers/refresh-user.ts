import { REFRESH_USER_INFO, REFRESH_USER_INFO_FAILED, REFRESH_USER_INFO_SUCCESS } from "../actions/refresh-user"

type TState = {
    userRefreshRequest: boolean,
    userRefreshFailed: boolean,
    userRefresh?: {
        success: boolean
        user: {
            name: string,
            email: string
        }
    }
}

const initialState = {
    userRefreshRequest: false,
    userRefreshFailed: false,
    userRefresh: undefined
}

export const RefreshUserInfoReduser = (state: TState = initialState, action: any): TState => {
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