import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "../actions/login"

const initialState = {
    userLoginRequest: false,
    userLoginFailed: false,
    res: {}
}

export const userLoginReduser = (state=initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                userLoginRequest: true,
                userLoginFailed: false
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                userLoginRequest: false,
                res: action.res
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