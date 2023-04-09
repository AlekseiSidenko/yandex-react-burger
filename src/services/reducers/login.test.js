import * as types from "../constants"
import { userLoginInitialState, userLoginReduser } from "./login"

export const successUserLogin = {
    success: true,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDZmNWU5OTM2YjE3MDAxYmU2NTIwYiIsImlhdCI6MTY4MDE3NDc2NCwiZXhwIjoxNjgwMTc1OTY0fQ.TEl6-i-lO5Tavryt7ALzOIZqwvA_twApqvQxfXTuo-Y",
    refreshToken: "5b207b44c8a14db3c94ad8e05276b25b01c8db06a2a4cc4c8c0cd2efc1512b922e41c08b2afe4132",
    user: {
        email: "test@ya.ru",
        name: "Test"
    }
}

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(userLoginReduser(undefined, {})).toEqual(userLoginInitialState)
    })

    it('start request login', () => {
        expect(userLoginReduser(
            userLoginInitialState,
            {
                type: types.USER_LOGIN
            }
        )).toEqual({
                ...userLoginInitialState,
                userLoginRequest: true
            })
    })
    it('request login success', () => {
        expect(userLoginReduser(
            {
                ...userLoginInitialState,
                userLoginRequest: true
            },
            {
                type: types.USER_LOGIN_SUCCESS,
                res: successUserLogin
            }
        )).toEqual(userLoginInitialState)})
    it('request login false', () => {
        expect(userLoginReduser(
            {
                ...userLoginInitialState,
                userLoginRequest: true
            },
            {
                type: types.USER_LOGIN_FAILED,
            }
        )).toEqual(
            {
                ...userLoginInitialState,
                userLoginFailed: true
            }
        )
    })
})