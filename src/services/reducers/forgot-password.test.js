import * as types from "../constants"
import { forgotPassInitialState, getTokenReduser } from "./forgot-password"

export const successForgotPassRequest = {
    message: "Reset email sent",
    success: true
}

describe('forgot password reducer', () => {
    it('should return the initial state', () => {
        expect(getTokenReduser(undefined, {})).toEqual(forgotPassInitialState)
    })

    it('start request forgot password', () => {
        expect(getTokenReduser(forgotPassInitialState,
            {
                type: types.GET_TOKEN
            }
        )).toEqual({
            ...forgotPassInitialState,
            sentPassRequest: true,
        })
    })
    it('request forgot password success', () => {
        expect(getTokenReduser(
            {
                ...forgotPassInitialState,
                sentPassRequest: true,
            },
            {
                type: types.GET_TOKEN_SUCCESS,
                res: successForgotPassRequest
            }
        )).toEqual({
            ...forgotPassInitialState,
            res: successForgotPassRequest,
            isMailSent: true
        })
    })
    it('request forgot password false', () => {
        expect(getTokenReduser(
            {
                ...forgotPassInitialState,
                sentPassRequest: true,
            },
            {
                type: types.GET_TOKEN_FAILED,
            }
        )).toEqual({
            ...forgotPassInitialState,
            sentPassFailed: true,
        })
    })
})