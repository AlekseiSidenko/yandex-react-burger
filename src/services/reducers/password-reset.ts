import { PASSWORD_RESET, PASSWORD_RESET_CLEAN_STATE, PASSWORD_RESET_FAILED, PASSWORD_RESET_SUCCESS } from "../actions/password-reset"

type TState = {
    passwordResetRequest: boolean,
    passwordResetFailed: boolean,
    res?: {
        "success": boolean,
        "message": "Reset email sent"
    }
}

const initialState = {
    passwordResetRequest: false,
    passwordResetFailed: false,
    res: undefined
}

export const passwordResetReduser = (state: TState = initialState, action: any): TState => {
    switch (action.type) {
        case PASSWORD_RESET: {
            return {
                ...state,
                passwordResetRequest: true,
                passwordResetFailed: false
            }
        }
        case PASSWORD_RESET_SUCCESS: {
            return {
                ...state,
                passwordResetRequest: false,
                res: action.res
            }
        }
        case PASSWORD_RESET_FAILED: {
            return {
                ...state,
                passwordResetRequest: false,
                passwordResetFailed: true
            }
        }
        case PASSWORD_RESET_CLEAN_STATE: {
            return {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: undefined
            }
        }
        default: {
            return state
        }
    }
}