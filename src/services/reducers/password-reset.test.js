import * as types from "../constants"
import { passResetInitialState, passwordResetReduser } from "./password-reset"

export const successPassReset = {
    message: "Password successfully reset",
    success: true
}

describe('password reset reducer', () => {
    it('should return the initial state', () => {
        expect(passwordResetReduser(undefined, {})).toEqual(passResetInitialState)
    })

    it('start request password reset', () => {
        expect(passwordResetReduser(
            passResetInitialState,
            {
                type: types.PASSWORD_RESET
            }
        )).toEqual(
            {
                ...passResetInitialState,
                passwordResetRequest: true
            }
        )
    })
    it('request password reset success', () => {
        expect(passwordResetReduser(
            {
                ...passResetInitialState,
                passwordResetRequest: true
            },
            {
                type: types.PASSWORD_RESET_SUCCESS,
                res: successPassReset
            }
        )).toEqual(
            {
                ...passResetInitialState,
                res: successPassReset
            }
        )
    })
    it('request password reset false', () => {
        expect(passwordResetReduser(
            {
                ...passResetInitialState,
                passwordResetRequest: true
            },
            {
                type: types.PASSWORD_RESET_FAILED,
            }
        )).toEqual(
            {
                ...passResetInitialState,
                passwordResetFailed: true,
            }
        )
    })
    it('password clean state', () => {
        expect(passwordResetReduser(
            {
                ...passResetInitialState,
                res: successPassReset
            },
            {
                type: types.PASSWORD_RESET_CLEAN_STATE,
            }
        )).toEqual(passResetInitialState)
    })
})