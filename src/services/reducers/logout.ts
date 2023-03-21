import { deleteCookie } from "../../utils/cookie";
import { LOG_OUT, LOG_OUT_FAILED, LOG_OUT_SUCCESS } from "../actions/logout"

type TState = {
    logOutRequest: boolean,
    logOutFailed: boolean,
}

const initialState = {
    logOutRequest: false,
    logOutFailed: false,
}

export const logOutReduser = (state: TState = initialState, action: any): TState => {
    switch (action.type) {
        case LOG_OUT: {
            return {
                ...state,
                logOutRequest: true,
                logOutFailed: false
            }
        }
        case LOG_OUT_SUCCESS: {
            deleteCookie('token');
            deleteCookie('refToken');
            return {
                ...state,
                logOutRequest: false,
            }
        }
        case LOG_OUT_FAILED: {
            deleteCookie('token');
            deleteCookie('refToken');
            return {
                ...state,
                logOutRequest: false,
                logOutFailed: true
            }
        }
        default: {
            return state
        }
    }
}