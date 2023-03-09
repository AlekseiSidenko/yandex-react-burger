import { CLEAN_NEW_TOKEN, GET_NEW_TOKEN, GET_NEW_TOKEN_FAILED, GET_NEW_TOKEN_SUCCESS } from "../actions/token"

const initialState = {
    newTokenRequest: false,
    newTokenFailed: false,
    newToken: {}
}

export const newTokenReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_TOKEN: {
            return {
                ...state,
                userLoginRequest: true,
                userLoginFailed: false
            }
        }
        case GET_NEW_TOKEN_SUCCESS: {
            return {
                ...state,
                userLoginRequest: false,
                newToken: action.res
            }
        }
        case GET_NEW_TOKEN_FAILED: {
            return {
                ...state,
                userLoginRequest: false,
                userLoginFailed: true
            }
        }
        case CLEAN_NEW_TOKEN: {
            return {
                newTokenRequest: false,
                newTokenFailed: false,
                newToken: {}
            }
        }
        default: {
            return state
        }
    }
}