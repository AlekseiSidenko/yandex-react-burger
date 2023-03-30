import * as types from "../constants"
import { userRegisterReduser } from "./register"

describe('register reducer', () => {
    it('should return the initial state', () => {
        expect(userRegisterReduser(undefined, {})).toEqual(
            {
                userRegisterRequest: false,
                userRegisterFailed: false,
                res: undefined
            }
        )
    })
    it('start request register', () => {
        expect(userRegisterReduser(
            {
                userRegisterRequest: false,
                userRegisterFailed: false,
                res: undefined
            },
            {
                type: types.USER_REGISTER
            }
        )).toEqual(
            {
                userRegisterRequest: true,
                userRegisterFailed: false,
                res: undefined
            }
        )
    })
    it('request register success', () => {
        expect(userRegisterReduser(
            {
                userRegisterRequest: true,
                userRegisterFailed: false,
                res: undefined
            },
            {
                type: types.USER_REGISTER_SUCCESS,
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
                userRegisterRequest: false,
                userRegisterFailed: false,
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
        )
    })
    it('request register false', () => {
        expect(userRegisterReduser(
            {
                userRegisterRequest: true,
                userRegisterFailed: false,
                res: undefined
            },
            {
                type: types.USER_REGISTER_FAILED,
            }
        )).toEqual(
            {
                userRegisterRequest: false,
                userRegisterFailed: true,
                res: undefined
            }
        )
    })
    it('register clean state', () => {
        expect(userRegisterReduser(
            {
                userRegisterRequest: false,
                userRegisterFailed: false,
                res: {
                    success: true,
                    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDZmNWU5OTM2YjE3MDAxYmU2NTIwYiIsImlhdCI6MTY4MDE3NDc2NCwiZXhwIjoxNjgwMTc1OTY0fQ.TEl6-i-lO5Tavryt7ALzOIZqwvA_twApqvQxfXTuo-Y",
                    refreshToken: "5b207b44c8a14db3c94ad8e05276b25b01c8db06a2a4cc4c8c0cd2efc1512b922e41c08b2afe4132",
                    user: {
                        email: "test@ya.ru",
                        name: "Test"
                    }
                }
            },
            {
                type: types.REGISTER_CLEAN_STATE,
            }
        )).toEqual(
            {
                userRegisterRequest: false,
                userRegisterFailed: false,
                res: undefined
            }
        )
    })
})