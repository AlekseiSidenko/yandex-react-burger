import { CLEAN_LOG_OUT_INFO, LOG_OUT, LOG_OUT_FAILED, LOG_OUT_SUCCESS } from "../actions/logout"

const initialState = {
    logOutRequest: false,
    logOutFailed: false,
    logOutUser: {}
}

export const logOutReduser = (state = initialState, action) => {
    switch (action.type) {
        case LOG_OUT: {
            return {
                ...state,
                logOutRequest: true,
                logOutFailed: false
            }
        }
        case LOG_OUT_SUCCESS: {
            return {
                ...state,
                logOutRequest: false,
                logOutUser: action.res
            }
        }
        case LOG_OUT_FAILED: {
            return {
                ...state,
                logOutRequest: false,
                logOutFailed: true
            }
        }
        case CLEAN_LOG_OUT_INFO: {
            return {
                logOutRequest: false,
                logOutFailed: false,
                logOutUser: {}
            }
        }
        default: {
            return state
        }
    }
}