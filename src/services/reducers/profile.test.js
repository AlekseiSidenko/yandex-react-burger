import * as types from "../constants"
import { successUserLogin } from "./login.test"
import { profileInitialState, userInfoReduser } from "./profile"
import { successUserRefresh } from "./refresh-user.test"

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(userInfoReduser(undefined, {})).toEqual(profileInitialState)
    })

    it('start profile request', () => {
        expect(userInfoReduser(
            profileInitialState,
            {
                type: types.GET_USER_INFO
            }
        )).toEqual(
            {
                ...profileInitialState,
                userInfoRequest: true,
            }
        )
    })
    it('request profile success', () => {
        expect(userInfoReduser(
            {
                ...profileInitialState,
                userInfoRequest: true,
            },
            {
                type: types.GET_USER_INFO_SUCCESS,
                res: successUserLogin
            }
        )).toEqual(
            {
                ...profileInitialState,
                authChecked: true,
                userInfo: successUserLogin
            }
        )
    })
    it('request profile false', () => {
        expect(userInfoReduser(
            {
                ...profileInitialState,
                userInfoRequest: true,
            },
            {
                type: types.GET_USER_INFO_FAILED,
            }
        )).toEqual(
            {
                ...profileInitialState,
                authChecked: true,
                userInfoFailed: true,
            }
        )
    })

    it('get profile info by success login', () => {
        expect(userInfoReduser(
            profileInitialState,
            {
                type: types.USER_LOGIN_SUCCESS,
                res: successUserLogin
            }
        )).toEqual(
            {
                ...profileInitialState,
                authChecked: true,
                userInfo: successUserLogin
            }
        )
    })
    it('get profile info by success register', () => {
        expect(userInfoReduser(
            profileInitialState,
            {
                type: types.USER_REGISTER_SUCCESS,
                res: successUserLogin
            }
        )).toEqual(
            {
                ...profileInitialState,
                authChecked: true,
                userInfo: successUserLogin
            }
        )
    })
    it('get profile info by success refresh user info', () => {
        expect(userInfoReduser(
            profileInitialState,
            {
                type: types.REFRESH_USER_INFO_SUCCESS,
                res: successUserRefresh
            }
        )).toEqual(
            {
                ...profileInitialState,
                authChecked: true,
                userInfo: successUserRefresh
            }
        )
    })
})