import * as types from "../constants"
import { passwordResetReduser } from "./password-reset"

describe('password reset reducer', () => {
    it('should return the initial state', () => {
        expect(passwordResetReduser(undefined, {})).toEqual(
            {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: undefined
            }
        )
    })
    it('start request password reset', () => {
        expect(passwordResetReduser(
            {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: undefined
            },
            {
                type: types.PASSWORD_RESET
            }
        )).toEqual(
            {
                passwordResetRequest: true,
                passwordResetFailed: false,
                res: undefined
            }
        )
    })
    it('request password reset success', () => {
        expect(passwordResetReduser(
            {
                passwordResetRequest: true,
                passwordResetFailed: false,
                res: undefined
            },
            {
                type: types.PASSWORD_RESET_SUCCESS,
                res: {
                    message: "Password successfully reset",
                    success: true
                }
            }
        )).toEqual(
            {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: {
                    message: "Password successfully reset",
                    success: true
                }
            }
        )
    })
    it('request password reset false', () => {
        expect(passwordResetReduser(
            {
                passwordResetRequest: true,
                passwordResetFailed: false,
                res: undefined
            },
            {
                type: types.PASSWORD_RESET_FAILED,
            }
        )).toEqual(
            {
                passwordResetRequest: false,
                passwordResetFailed: true,
                res: undefined
            }
        )
    })
    it('password clean state', () => {
        expect(passwordResetReduser(
            {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: {
                    message: "Password successfully reset",
                    success: true
                }
            },
            {
                type: types.PASSWORD_RESET_CLEAN_STATE,
            }
        )).toEqual(
            {
                passwordResetRequest: false,
                passwordResetFailed: false,
                res: undefined
            }
        )
    })
})