import * as types from "../constants"
import { userInfoReduser } from "./profile"

const succesUser = {
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

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(userInfoReduser(undefined, {})).toEqual(
            {
                userInfoRequest: false,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            }
        )
    })
    it('start profile request', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: false,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            },
            {
                type: types.GET_USER_INFO
            }
        )).toEqual(
            {
                userInfoRequest: true,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            }
        )
    })
    it('request profile success', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: true,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            },
            {
                type: types.GET_USER_INFO_SUCCESS,
                res: succesUser
            }
        )).toEqual(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: succesUser
            }
        )
    })
    it('request profile false', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: true,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            },
            {
                type: types.GET_USER_INFO_FAILED,
            }
        )).toEqual(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: true,
                userInfo: undefined
            }
        )
    })
    it('get profile info by success login', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: false,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            },
            {
                type: types.USER_LOGIN_SUCCESS,
                res: succesUser
            }
        )).toEqual(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: succesUser
            }
        )
    })
    it('get profile info by success register', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: false,
                authChecked: false,
                userInfoFailed: false,
                userInfo: undefined
            },
            {
                type: types.USER_REGISTER_SUCCESS,
                res: succesUser
            }
        )).toEqual(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: succesUser
            }
        )
    })
    it('get profile info by success refresh user info', () => {
        expect(userInfoReduser(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: succesUser
            },
            {
                type: types.REFRESH_USER_INFO_SUCCESS,
                res: {
                    success: true,
                    user: {
                        email: "test@ya.ru",
                        name: "Test"
                    }
                }
            }
        )).toEqual(
            {
                userInfoRequest: false,
                authChecked: true,
                userInfoFailed: false,
                userInfo: {
                    success: true,
                    user: {
                        email: "test@ya.ru",
                        name: "Test"
                    }
                }
            }
        )
    })
})