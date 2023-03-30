import * as types from "../constants"
import { userLoginReduser } from "./login"

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(userLoginReduser(undefined, {})).toEqual(
            {
                userLoginRequest: false,
                userLoginFailed: false,
            }
        )
    })
    it('start request login', () => {
        expect(userLoginReduser(
            {
                userLoginRequest: false,
                userLoginFailed: false,
            },
            {
                type: types.USER_LOGIN
            }
        )).toEqual(
            {
                userLoginRequest: true,
                userLoginFailed: false,
            }
        )
    })
    it('request login success', () => {
        expect(userLoginReduser(
            {
                userLoginRequest: true,
                userLoginFailed: false,
            },
            {
                type: types.USER_LOGIN_SUCCESS,
                res: {
                        success: true,
                        accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDZmNWU5OTM2YjE3MDAxYmU2NTIwYiIsImlhdCI6MTY4MDE3NDc2NCwiZXhwIjoxNjgwMTc1OTY0fQ.TEl6-i-lO5Tavryt7ALzOIZqwvA_twApqvQxfXTuo-Y",
                        refreshToken: "5b207b44c8a14db3c94ad8e05276b25b01c8db06a2a4cc4c8c0cd2efc1512b922e41c08b2afe4132",
                        user: {
                            email: "test@ya.ru",
                            name: "Test"
                        }
                }
            }
        )).toEqual(
            {
                userLoginRequest: false,
                userLoginFailed: false,
            }
        )
    })
    it('request login false', () => {
        expect(userLoginReduser(
            {
                userLoginRequest: true,
                userLoginFailed: false,
            },
            {
                type: types.USER_LOGIN_FAILED,
            }
        )).toEqual(
            {
                userLoginRequest: false,
                userLoginFailed: true,
            }
        )
    })
})