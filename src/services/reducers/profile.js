import { CLEAN_USER_INFO, GET_USER_INFO, GET_USER_INFO_FAILED, GET_USER_INFO_SUCCESS } from "../actions/profile"

const initialState = {
    userInfoRequest: false,
    userInfoFailed: false,
    userInfo: {}
}

export const userInfoReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO: {
            return {
                ...state,
                userLoginRequest: true,
                userLoginFailed: false
            }
        }
        case GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userLoginRequest: false,
                userInfo: action.res
            }
        }
        case GET_USER_INFO_FAILED: {
            return {
                ...state,
                userLoginRequest: false,
                userLoginFailed: true
            }
        }
        // case CLEAN_USER_INFO: {
        //     return {
        //         userInfoRequest: false,
        //         userInfoFailed: false,
        //         userInfo: {}
        //     }
        // }
        default: {
            return state
        }
    }
}