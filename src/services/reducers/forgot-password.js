import { GET_TOKEN, GET_TOKEN_CLEAN_STATE, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS } from "../actions/forgot-password"

const initialState = {
    sentPassRequest: false,
    sentPassFailed: false,
    res: {}
}

export const getTokenReduser = (state = initialState, action) => {
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
                res: action.res
            }
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                sentPassRequest: false,
                sentPassFailed: true
            }
        }
        case GET_TOKEN_CLEAN_STATE: {
            return {
                sentPassRequest: false,
                sentPassFailed: false,
                res: {}
            }
        }
        default: {
            return state
        }
    }
}