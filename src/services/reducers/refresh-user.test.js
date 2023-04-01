import * as types from "../constants"
import { refreshUserInfoReduser, refreshUserInitialState } from "./refresh-user"

export const successUserRefresh = {
    success: true,
    user: {
        email: "test@ya.ru",
        name: "Test"
    }
}

describe('refresh user reducer', () => {
    it('should return the initial state', () => {
        expect(refreshUserInfoReduser(undefined, {})).toEqual(refreshUserInitialState)
    })

    it('start refresh user request', () => {
        expect(refreshUserInfoReduser(
            refreshUserInitialState,
            {
                type: types.REFRESH_USER_INFO
            }
        )).toEqual(
            {
                ...refreshUserInitialState,
                userRefreshRequest: true
            }
        )
    })
    it('request refresh user success', () => {
        expect(refreshUserInfoReduser(
            {
                ...refreshUserInitialState,
                userRefreshRequest: true
            },
            {
                type: types.REFRESH_USER_INFO_SUCCESS,
                res: successUserRefresh
            }
        )).toEqual(
            {
                ...refreshUserInitialState,
                userRefresh: successUserRefresh
            }
        )
    })
    it('request refresh user false', () => {
        expect(refreshUserInfoReduser(
            {
                ...refreshUserInitialState,
                userRefreshRequest: true
            },
            {
                type: types.REFRESH_USER_INFO_FAILED,
            }
        )).toEqual(
            {
                ...refreshUserInitialState,
                userRefreshFailed: true,
            }
        )
    })
})