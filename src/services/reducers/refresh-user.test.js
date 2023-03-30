import * as types from "../constants"
import { refreshUserInfoReduser } from "./refresh-user"

describe('refresh user reducer', () => {
    it('should return the initial state', () => {
        expect(refreshUserInfoReduser(undefined, {})).toEqual(
            {
                userRefreshRequest: false,
                userRefreshFailed: false,
                userRefresh: undefined
            }
        )
    })
    it('start refresh user request', () => {
        expect(refreshUserInfoReduser(
            {
                userRefreshRequest: false,
                userRefreshFailed: false,
                userRefresh: undefined
            },
            {
                type: types.REFRESH_USER_INFO
            }
        )).toEqual(
            {
                userRefreshRequest: true,
                userRefreshFailed: false,
                userRefresh: undefined
            }
        )
    })
    it('request refresh user success', () => {
        expect(refreshUserInfoReduser(
            {
                userRefreshRequest: true,
                userRefreshFailed: false,
                userRefresh: undefined
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
                userRefreshRequest: false,
                userRefreshFailed: false,
                userRefresh: {
                    success: true,
                    user: {
                        email: "test@ya.ru",
                        name: "Test"
                    }
                }
            }
        )
    })
    it('request refresh user false', () => {
        expect(refreshUserInfoReduser(
            {
                userRefreshRequest: true,
                userRefreshFailed: false,
                userRefresh: undefined
            },
            {
                type: types.REFRESH_USER_INFO_FAILED,
            }
        )).toEqual(
            {
                userRefreshRequest: false,
                userRefreshFailed: true,
                userRefresh: undefined
            }
        )
    })
})