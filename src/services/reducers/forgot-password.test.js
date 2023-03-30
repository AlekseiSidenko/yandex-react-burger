import * as types from "../constants"
import { getTokenReduser } from "./forgot-password"

describe('forgot password reducer', () => {
    it('should return the initial state', () => {
        expect(getTokenReduser(undefined, {})).toEqual(
            {
                sentPassRequest: false,
                sentPassFailed: false,
                isMailSent: false,
                res: undefined
            }
        )
    })
    it('start request forgot password', () => {
        expect(getTokenReduser(
            {
                sentPassRequest: false,
                sentPassFailed: false,
                isMailSent: false,
                res: undefined
            },
            {
                type: types.GET_TOKEN
            }
        )).toEqual(
            {
                sentPassRequest: true,
                sentPassFailed: false,
                isMailSent: false,
                res: undefined
            }
        )
    })
    it('request forgot password success', () => {
        expect(getTokenReduser(
            {
                sentPassRequest: true,
                sentPassFailed: false,
                isMailSent: false,
                res: undefined
            },
            {
                type: types.GET_TOKEN_SUCCESS,
                res: {
                    message: "Reset email sent",
                    success: true
                }
            }
        )).toEqual(
            {
                sentPassRequest: false,
                sentPassFailed: false,
                isMailSent: true,
                res: {
                    message: "Reset email sent",
                    success: true
                }
            }
        )
    })
    it('request forgot password false', () => {
        expect(getTokenReduser(
            {
                sentPassRequest: true,
                sentPassFailed: false,
                isMailSent: false,
                res: undefined
            },
            {
                type: types.GET_TOKEN_FAILED,
            }
        )).toEqual(
            {
                sentPassRequest: false,
                sentPassFailed: true,
                isMailSent: false,
                res: undefined
            }
        )
    })
})